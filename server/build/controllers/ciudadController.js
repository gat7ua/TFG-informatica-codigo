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
exports.ciudadController = void 0;
const database_1 = __importDefault(require("../database"));
class CiudadController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.send('Ciudades');
            const retur = yield database_1.default.query("select * from ciudad");
            res.json(retur);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from ciudad where id_ciud = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0]);
            }
            res.status(404).json("No existe la ciudad");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("call insertaCiudad('" + req.body.nombre + "', '" + req.body.pais + "');");
            res.json({ text: 'ciudad creada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from ciudad where id_ciud = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("update ciudad c set c.nombre = '" + req.body.nombre + "', pais = '" + req.body.pais + "' where id_ciud = " + req.params.id);
                res.json({ text: 'ciudad actualizada' });
            }
            else {
                res.json({ text: 'No existe una ciudad con ese ID' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from ciudad where id_ciud = " + req.params.id);
            if (consul.length > 0) {
                database_1.default.query("delete from ciudad where id_ciud = " + req.params.id);
                res.json({ text: 'ciudad borrada ' + req.params.id });
            }
            else {
                res.json({ text: 'No existe una ciudad con ese ID' });
            }
        });
    }
}
exports.ciudadController = new CiudadController();
