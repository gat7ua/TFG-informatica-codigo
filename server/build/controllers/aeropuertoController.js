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
exports.aeropuertoController = void 0;
const database_1 = __importDefault(require("../database"));
class AeropuertoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select a.*, c.nombre nombre_ciud, c.pais \
             from aeropuerto a, ciudad c \
             where a.id_ciud = c.id_ciud;");
            //console.log(retur);
            res.json(retur);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from aeropuerto where id_aero = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0]);
            }
            res.status(404).json("No existe el aeropuerto");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("call insertaAeropuerto('" + req.body.nombre + "', " + req.body.id_ciud + ", '" + req.body.cod_iata + "');");
            res.json({ text: 'aeropuerto creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from aeropuerto where id_aero = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("update aeropuerto c set c.nombre = '" + req.body.nombre + "', id_ciud = " + req.body.id_ciud +
                    ", cod_iata= '" + req.body.cod_iata + "' where id_aero = " + req.params.id);
                res.json({ text: 'aeropuerto actualizado' });
            }
            else {
                res.json({ text: 'No existe un aeropuerto con ese ID' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from aeropuerto where id_aero = " + req.params.id);
            if (consul.length > 0) {
                database_1.default.query("delete from aeropuerto where id_aero = " + req.params.id);
                res.json({ text: 'aeropuerto borrado ' + req.params.id });
            }
            else {
                res.json({ text: 'No existe un aeropuerto con ese ID' });
            }
        });
    }
    cuentaIda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consul = yield database_1.default.query("select * from aeropuerto where id_aero = " + req.params.id);
            if (consul.length > 0) {
                const retur = yield database_1.default.query("select count(*) cuenta from vuelo v where v.aero_salida = " + req.params.id);
                res.json(retur[0]);
            }
            else {
                res.json({ text: 'No existe un aeropuerto con ese ID' });
            }
        });
    }
    cuentaVuelta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consul = yield database_1.default.query("select * from aeropuerto where id_aero = " + req.params.id);
            if (consul.length > 0) {
                const retur = yield database_1.default.query("select count(*) cuenta from vuelo v where v.aero_llegad = " + req.params.id);
                res.json(retur[0]);
            }
            else {
                res.json({ text: 'No existe un aeropuerto con ese ID' });
            }
        });
    }
}
exports.aeropuertoController = new AeropuertoController();
