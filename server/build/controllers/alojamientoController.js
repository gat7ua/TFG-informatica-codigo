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
exports.alojamientosController = void 0;
const database_1 = __importDefault(require("../database"));
class AlojamientoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup \
            from alojamiento v, producto p, ciudad c \
            where v.id_prod = p.id_prod \
            and c.id_ciud = v.id_ciud ");
            return res.json(retur);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup \
            from alojamiento v, producto p, ciudad c \
            where v.id_prod = p.id_prod \
            and c.id_ciud = v.id_ciud \
            and v.id_prod = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0]);
            }
            res.status(404).json("No existe el alojamiento");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("call insertaAlojamiento(" +
                req.body.precio_unitario + ", " +
                req.body.uds_disponibles + ", " +
                "'" + req.body.cod_aloj + "', " +
                req.body.num_camas + ", " +
                req.body.num_aseos + ", '" +
                req.body.nombre + "', '" +
                req.body.descripcion + "', " +
                req.body.id_ciud +
                ");");
            res.json({ text: 'alojamiento creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from vuelo where id_prod = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("update producto c set " +
                    "precio_unitario = " + req.body.precio_unitario + ", " +
                    "uds_disponibles = " + req.body.uds_disponibles + ", " +
                    "uds_ocup = " + req.body.uds_ocup + " " +
                    "where id_prod = " + req.body.id_prod + ";");
                yield database_1.default.query("update alojamiento c set " +
                    "cod_aloj = '" + req.body.cod_aloj + "', " +
                    "num_camas = " + req.body.num_camas + ", " +
                    "num_aseos = " + req.body.num_aseos + ", " +
                    "nombre = '" + req.body.nombre + "', " +
                    "descripcion = '" + req.body.descripcion + "', " +
                    "id_ciud = " + req.params.id_ciud + ", " +
                    "where id_prod = " + req.body.id_prod + ";");
                res.json({ text: 'alojamiento actualizado' });
            }
            else {
                res.json({ text: 'No existe un alojamiento con ese ID' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consul = yield database_1.default.query("select * from alojamiento where id_prod = " + req.params.id);
            if (consul.length > 0) {
                database_1.default.query('delete from alojamiento where id_prod = ' + req.params.id);
                database_1.default.query('delete from producto where id_prod = ' + req.params.id);
                res.json({ text: 'alojamiento borrado ' + req.params.id });
            }
            else {
                res.json({ text: 'No existe un alojamiento con ese ID' });
            }
        });
    }
    busqueda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            var querI = "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup \
            from alojamiento v, producto p, ciudad c \
            where v.id_prod = p.id_prod \
            and c.id_ciud = v.id_ciud \
            and not exists ( \
                select 1 from ocupacion o \
                where o.estado = 'C' \
                and o.id_prod = v.id_prod \
                and o.fechaIni = '" + req.body.chIn + "' \
            )";
            if (req.body.cod_aloj == "HO")
                querI = querI.concat(" and v.cod_aloj = 'HO' ");
            else if (req.body.cod_aloj == "HS")
                querI = querI.concat(" and v.cod_aloj = 'HS' ");
            else if (req.body.cod_aloj == "AL")
                querI = querI.concat(" and v.cod_aloj = 'AL' ");
            else if (req.body.cod_aloj == "AP")
                querI = querI.concat(" and v.cod_aloj = 'AP' ");
            querI = querI.concat(" and p.uds_disponibles >= " + req.body.uds);
            querI = querI.concat(" and v.num_camas >= " + req.body.num_perso);
            var retur = yield database_1.default.query(querI);
            res.json(retur);
        });
    }
}
exports.alojamientosController = new AlojamientoController();
