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
exports.autobusesController = void 0;
const database_1 = __importDefault(require("../database"));
class AutobusesController {
    list(req, res) {
    }
    get(req, res) {
    }
    create(req, res) {
    }
    update(req, res) {
    }
    delete(req, res) {
        database_1.default.query('delete from autobus where id_prod = ' + req.params.id);
        database_1.default.query('delete from producto where id_prod = ' + req.params.id);
        res.json({ text: 'autobus borrado ' + req.params.id });
    }
    busqueda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            var querI = "from autobus v, producto p, estacionautobus a1, estacionautobus a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_esau = v.esta_salida \
            and a2.id_esau = v.esta_llegad \
            and p2.id_prov = v.id_prov ";
            if (req.body.clase == "turista")
                querI = querI.concat(" and v.ocup_asi_tur + ").concat(req.body.num_viaj).concat(" <= v.num_asi_tur");
            else if (req.body.clase == "bussiness")
                querI = querI.concat(" and v.ocup_asi_buss + ").concat(req.body.num_viaj).concat(" <= v.num_asi_buss");
            else if (req.body.clase == "primera")
                querI = querI.concat(" and v.ocup_asi_buss + ").concat(req.body.num_viaj).concat(" <= v.num_asi_buss");
            var querV = querI;
            querI = querI.concat(" and date(fecha) = ").concat("'").concat(req.body.ida).concat("'");
            querI = querI.concat(" and v.esau_salida = ".concat(req.body.desde));
            if (!!req.body.hacia)
                querI = querI.concat(" and v.esau_llegad = ".concat(req.body.hacia));
            querV = querV.concat(" and date(fecha) = ").concat("'").concat(req.body.vuelta).concat("'");
            if (!!req.body.hacia)
                querV = querV.concat(" and v.esau_salida = ".concat(req.body.hacia));
            querV = querV.concat(" and v.esau_llegad = ".concat(req.body.desde));
            var retur;
            if (!!req.body.vuelta) {
                retur = yield database_1.default.query("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre esau_sal_nombre, \
                 a2.nombre esau_lleg_nombre,\
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI).concat(" union ")
                    .concat("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                a1.nombre esau_sal_nombre, \
                a2.nombre esau_lleg_nombre, \
                p2.nombre nombre_prov, p2.sede sede_prov, 'vuelta' ").concat(querV));
            }
            else {
                retur = yield database_1.default.query("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre esau_sal_nombre, \
                 a2.nombre esau_lleg_nombre, \
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI));
            }
            res.json(retur);
        });
    }
}
exports.autobusesController = new AutobusesController();
