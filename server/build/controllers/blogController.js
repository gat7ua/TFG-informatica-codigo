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
exports.blogController = void 0;
const database_1 = __importDefault(require("../database"));
class BlogController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from publicacion");
            return res.json(retur);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from publicacion where id_publ = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0]);
            }
            res.status(404).json("No existe el publ");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("call insertaPublicacion('" +
                req.body.titulo + "', '" +
                req.body.texto + "', " +
                req.body.id_usua +
                ");");
            res.json({ text: 'publ creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from publicacion where id_publ = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("update publicacion c set " +
                    "titulo = " + req.body.titulo + ", " +
                    "texto = " + req.body.texto + ", " +
                    "where id_publ = " + req.params.id + ";");
                res.json({ text: 'publ actualizado' });
            }
            else {
                res.json({ text: 'No existe un publ con ese ID' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('delete from publicacion where id_publ = ' + req.params.id);
            res.json({ text: 'publ borrado ' + req.params.id });
        });
    }
    listC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from mensaje where id_publ = " + req.params.id);
            return res.json(retur);
        });
    }
    listAC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select * from mensaje");
            return res.json(retur);
        });
    }
    postC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("call insertaMensaje('" +
                req.body.texto + "', " +
                req.params.id + ", " +
                req.body.id_usua +
                ");");
            res.json({ text: 'publ creado' });
        });
    }
    putC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from mensaje where id_mens = " + req.params.idc);
            if (consul.length > 0) {
                yield database_1.default.query("update mensaje c set " +
                    "texto = '" + req.body.texto + "' " +
                    "where id_mens = " + req.params.idc + ";");
                res.json({ text: 'mens actualizado' });
            }
            else {
                res.json({ text: 'No existe un mens con ese ID' });
            }
        });
    }
    deleteC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('delete from mensaje where id_mens = ' + req.params.idc);
            res.json({ text: 'mens borrado ' + req.params.idc });
        });
    }
}
exports.blogController = new BlogController();
