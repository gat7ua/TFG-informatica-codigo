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
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
            a1.nombre esta_sal_nombre, \
            a2.nombre esta_lleg_nombre, \
            p2.nombre nombre_prov, p2.sede sede_prov \
            from autobus v, producto p, estacionautobus a1, estacionautobus a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_esau = v.esta_salida \
            and a2.id_esau = v.esta_llegad \
            and p2.id_prov = v.id_prov ");
            return res.json(retur);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retur = yield database_1.default.query("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
            a1.nombre esta_sal_nombre, \
            a2.nombre esta_lleg_nombre, \
            p2.nombre nombre_prov, p2.sede sede_prov \
            from autobus v, producto p, estacionautobus a1, estacionautobus a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_esau = v.esta_salida \
            and a2.id_esau = v.esta_llegad \
            and p2.id_prov = v.id_prov \
            and v.id_prod = " + req.params.id);
            if (retur.length > 0) {
                return res.json(retur[0]);
            }
            res.status(404).json("No existe el autobus");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("call insertaAutobus(" +
                req.body.precio_unitario + ", " +
                req.body.num_asi_tur + ", " +
                req.body.num_asi_buss + ", " +
                req.body.num_asi_prim + ", " +
                "'" + req.body.fecha + "', " +
                req.body.esta_salida + ", " +
                req.body.esta_llegad + ", " +
                req.body.porc_buss + ", " +
                req.body.porc_prim + ", " +
                req.body.id_prov + ", " +
                "'" + req.body.duracion + "'" +
                ");");
            res.json({ text: 'autobus creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consul = yield database_1.default.query("select * from autobus where id_prod = " + req.params.id);
            if (consul.length > 0) {
                yield database_1.default.query("update producto c set " +
                    "precio_unitario = " + req.body.precio_unitario + ", " +
                    "uds_disponibles = " + req.body.uds_disponibles + ", " +
                    "uds_ocup = " + req.body.uds_ocup + " " +
                    "where id_prod = " + req.body.id_prod + ";");
                yield database_1.default.query("update autobus c set " +
                    "fecha = '" + req.body.fecha + "', " +
                    "duracion = '" + req.body.duracion + "', " +
                    "num_asi_tur = " + req.body.num_asi_tur + ", " +
                    "num_asi_buss = " + req.body.num_asi_buss + ", " +
                    "num_asi_prim = " + req.body.num_asi_prim + ", " +
                    "porc_buss = " + req.body.porc_buss + ", " +
                    "porc_prim = " + req.body.porc_prim + ", " +
                    "ocup_asi_tur = " + req.body.ocup_asi_tur + ", " +
                    "ocup_asi_buss = " + req.body.ocup_asi_buss + ", " +
                    "ocup_asi_prim = " + req.body.ocup_asi_prim + ", " +
                    "esta_salida = " + req.body.esta_salida + ", " +
                    "esta_llegad = " + req.body.esta_llegad + ", " +
                    "id_prov = " + req.body.id_prov + " " +
                    "where id_prod = " + req.body.id_prod + ";");
                res.json({ text: 'autobus actualizado' });
            }
            else {
                res.json({ text: 'No existe un autobus con ese ID' });
            }
        });
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
            querI = querI.concat(" and v.esta_salida = ".concat(req.body.desde));
            if (!!req.body.hacia)
                querI = querI.concat(" and v.esta_llegad = ".concat(req.body.hacia));
            querV = querV.concat(" and date(fecha) = ").concat("'").concat(req.body.vuelta).concat("'");
            if (!!req.body.hacia)
                querV = querV.concat(" and v.esta_salida = ".concat(req.body.hacia));
            querV = querV.concat(" and v.esta_llegad = ".concat(req.body.desde));
            var retur;
            if (!!req.body.vuelta) {
                retur = yield database_1.default.query("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre esta_sal_nombre, \
                 a2.nombre esta_lleg_nombre,\
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI).concat(" union ")
                    .concat("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                a1.nombre esta_sal_nombre, \
                a2.nombre esta_lleg_nombre, \
                p2.nombre nombre_prov, p2.sede sede_prov, 'vuelta' ").concat(querV));
            }
            else {
                retur = yield database_1.default.query("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre esta_sal_nombre, \
                 a2.nombre esta_lleg_nombre, \
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI));
            }
            res.json(retur);
        });
    }
}
exports.autobusesController = new AutobusesController();
