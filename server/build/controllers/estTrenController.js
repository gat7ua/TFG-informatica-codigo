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
exports.estTrenController = void 0;
const database_1 = __importDefault(require("../database"));
class EstTrenController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select a.*, c.nombre nombre_ciud, c.pais \
             from estaciontren a, ciudad c \
             where a.id_ciud = c.id_ciud;");
            //console.log(retur);
            res.json(retur);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from estaciontren where id_estr = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0]);
            }
            res.status(404).json("No existe la estacion de trenes");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("call insertaEstacionTren('" + req.body.nombre + "', " + req.body.id_ciud + ");");
            res.json({ text: 'estacion de trenes creada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from estaciontren where id_estr = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("update estaciontren c set c.nombre = '" + req.body.nombre + "', id_ciud = " + req.body.id_ciud +
                    " where id_estr = " + req.params.id);
                res.json({ text: 'estacion de trenes actualizada' });
            }
            else {
                res.json({ text: 'No existe una estacion de trenes con ese ID' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from estaciontren where id_estr = " + req.params.id);
            if (consul.length > 0) {
                database_1.default.query("delete from estaciontren where id_estr = " + req.params.id);
                res.json({ text: 'estacion de trenes borrada ' + req.params.id });
            }
            else {
                res.json({ text: 'No existe una estacion de trenes con ese ID' });
            }
        });
    }
}
exports.estTrenController = new EstTrenController();
