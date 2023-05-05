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
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from usuario");
            res.json(retur);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from usuario where id_usua = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0]);
            }
            res.status(404).json("No existe el usuario");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from usuario where email = '" + req.body.email + "'");
            console.log(req.body.email);
            if (consul.length <= 0) {
                yield database_1.default.query("call insertaCliente('" + req.body.nif + "', '" + req.body.nombre + "', '" + req.body.apellido1 + "', '" + req.body.apellido2
                    + "', '" + req.body.email + "', '" + req.body.password + "', '" + req.body.direccion + "');");
                res.json({ text: 'usuario creado' });
            }
            else {
                res.json({ text: 'Ya existe un usuario con ese email' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from usuario where id_usua = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("update usuario u"
                    + "set u.nif = '" + req.body.nif + "', '"
                    + "u.nombre = '" + req.body.nombre + "', '"
                    + "u.apellido1 = '" + req.body.apellido1 + "', '"
                    + "u.apellido2 = '" + req.body.apellido2 + "', '"
                    + "u.email = '" + req.body.email + "', '"
                    + "u.password = '" + req.body.password + "', '"
                    + "u.direccion = '" + req.body.direccion
                    + "' where id_usua = " + req.params.id);
                res.json({ text: 'usuario actualizado' });
            }
            else {
                res.json({ text: 'No existe un usuario con ese ID' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from usuario where id_usua = " + req.params.id);
            if (consul.length > 0) {
                database_1.default.query("delete from usuario where id_usua = " + req.params.id);
                res.json({ text: 'usuario borrado ' + req.params.id });
            }
            else {
                res.json({ text: 'No existe un usuario con ese ID' });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
