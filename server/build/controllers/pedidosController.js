"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidosController = void 0;
const database_1 = __importDefault(require("../database"));
class PedidosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from pedido");
            res.json(retur);
        });
    }
    listUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from pedido where id_usua = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur);
            }
            res.status(404).json("No existen pedidos para el usuario");
        });
    }
    numProdsCesta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select count(*) num from pedidoUsuarios where estadoPedido = 'P' and id_usua = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0].num);
            }
            res.status(404).json("No existen pedidos pendientes para el usuario");
        });
    }
    listLineas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from pedidoUsuarios where id_usua = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur);
            }
            res.status(404).json("No existen pedidos para el usuario");
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from pedidoUsuarios where id_pedi = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0]);
            }
            res.status(404).json("No existe el pedido");
        });
    }
    insertaLinea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            if (!req.body.id_usua) {
                res.json({ text: 'usuario nulo' });
                return;
            }
            if (!req.body.id_prod) {
                res.json({ text: 'producto nulo' });
                return;
            }
            if (!req.body.importe) {
                res.json({ text: 'importe nulo' });
                return;
            }
            if (!req.body.unidades) {
                res.json({ text: 'unidades nulo' });
                return;
            }
            var categ;
            if (!!req.body.categoria)
                categ = req.body.categoria == 'bussiness' ? '\'B\'' : (req.body.categoria == 'primera' ? '\'P\'' : null);
            else
                categ = null;
            var fini;
            if (!!req.body.chIn)
                fini = req.body.chIn;
            else
                fini = null;
            var fsal;
            if (!!req.body.chOut)
                fsal = req.body.chOut;
            else
                fsal = null;
            var quer = "call insertaLineaPedido(" + req.body.id_usua + ", " + req.body.id_prod + ", " + req.body.importe + ", " + req.body.unidades + ", " + categ + ", ";
            if (fini) {
                quer = quer.concat(" '" + fini + "', '" + fsal + "');");
            }
            else {
                quer = quer.concat(" null, null);");
            }
            console.log(quer);
            yield database_1.default.query(quer);
            res.json({ text: 'Linea creada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    confirmaPedido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consul = yield database_1.default.query("select * from pedido where estadoPedido = 'P' and id_pedi = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("call confirmaPedido(" + req.params.id + ")");
                res.json({ text: 'pedido confirmado' });
            }
            else {
                res.json({ text: 'No existe un pedido con ese ID' });
            }
        });
    }
    cancelaPedido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consul = yield database_1.default.query("select * from pedido where estadoPedido = 'C' and id_pedi = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("call cancelaPedido(" + req.params.id + ")");
                res.json({ text: 'pedido cancelado' });
            }
            else {
                res.json({ text: 'No existe un pedido con ese ID' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consul = yield database_1.default.query("select * from pedido where id_pedi = " + req.params.id);
            if (consul.length > 0) {
                database_1.default.query("delete from pedido where id_pedi = " + req.params.id);
                res.json({ text: 'pedido borrado ' + req.params.id });
            }
            else {
                res.json({ text: 'No existe un proveedor con ese ID' });
            }
        });
    }
    deleteLinea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consul = yield database_1.default.query("select * from lineapedido where id_pedi = " + req.params.id_p + " and linea = " + req.params.linea);
            if (consul.length > 0) {
                database_1.default.query("call eliminaLineaPedido(" + req.params.id_p + ", " + req.params.linea + ");");
                res.json({ text: 'pedido borrado ' + req.params.id_p + ", linea " + req.params.linea });
            }
            else {
                res.json({ text: 'No existe un pedido con ese ID o esa linea' });
            }
        });
    }
}
exports.pedidosController = new PedidosController();
