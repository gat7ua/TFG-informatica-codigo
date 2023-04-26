"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vuelosController = void 0;
const database_1 = __importDefault(require("../database"));
class VuelosController {
    list(req, res) {
        //db.query('call insertaOferta(4000000, \'2020-12-12\', \'2020-12-15\', 1.25)');
        res.send('Vuelos');
    }
    get(req, res) {
        database_1.default.query('describe vuelo');
        res.json({ text: 'vuelo ' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'vuelo creado' });
    }
    update(req, res) {
        res.json({ text: 'vuelo actualizado ' + req.params.id });
    }
    delete(req, res) {
        database_1.default.query('delete from vuelo where id_prod = ' + req.params.id);
        database_1.default.query('delete from producto where id_prod = ' + req.params.id);
        res.json({ text: 'vuelo borrado ' + req.params.id });
    }
}
exports.vuelosController = new VuelosController();
