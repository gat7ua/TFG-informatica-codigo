import {Request, Response} from 'express';

import db from '../database';

class VuelosController {
    public async list (req: Request, res: Response) {
        const retur = await db.query(
            "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
            a1.nombre aero_sal_nombre, a1.cod_iata cod_iata_sal, \
            a2.nombre aero_lleg_nombre, a2.cod_iata cod_iata_lleg, \
            p2.nombre nombre_prov, p2.sede sede_prov \
            from vuelo v, producto p, aeropuerto a1, aeropuerto a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_aero = v.aero_salida \
            and a2.id_aero = v.aero_llegad \
            and p2.id_prov = v.id_prov "
        );
        return res.json(retur);
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query(
            "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
            a1.nombre aero_sal_nombre, a1.cod_iata cod_iata_sal, \
            a2.nombre aero_lleg_nombre, a2.cod_iata cod_iata_lleg, \
            p2.nombre nombre_prov, p2.sede sede_prov \
            from vuelo v, producto p, aeropuerto a1, aeropuerto a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_aero = v.aero_salida \
            and a2.id_aero = v.aero_llegad \
            and p2.id_prov = v.id_prov \
            and v.id_prod = " + req.params.id
        );
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el vuelo");
    }

    public async create (req: Request, res: Response) {
        console.log(req.body);
        await db.query("call insertaVuelo("+ 
            req.body.precio_unitario + ", " +
            req.body.num_asi_tur +", " + 
            req.body.num_asi_buss + ", " + 
            req.body.num_asi_prim + ", " +
      "'" + req.body.fecha + "', " +
            req.body.aero_salida + ", " + 
            req.body.aero_llegad + ", " +
            req.body.porc_buss + ", " + 
            req.body.porc_prim + ", " + 
            req.body.id_prov + ", " + 
      "'" + req.body.duracion + "'" +
        ");");
        res.json({text: 'vuelo creado'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from vuelo where id_prod = " + req.params.id)
        if (consul.length > 0) {
            await db.query(
                "update producto c set " + 
                "precio_unitario = " + req.body.precio_unitario + ", " +
                "uds_disponibles = " + req.body.uds_disponibles + ", " +
                "uds_ocup = " + req.body.uds_ocup + " " +
                "where id_prod = " + req.body.id_prod + ";");
            await db.query(
                "update vuelo c set " + 
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
                "aero_salida = " + req.body.aero_salida + ", " + 
                "aero_llegad = " + req.body.aero_llegad + ", " + 
                "id_prov = " + req.body.id_prov + " " +
                "where id_prod = " + req.body.id_prod + ";");
            res.json({text: 'aeropuerto actualizado'});
        } else {
            res.json({text: 'No existe un aeropuerto con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        const consul = await db.query("select * from vuelo where id_prod = " + req.params.id)
        if (consul.length > 0) {
            db.query('delete from vuelo where id_prod = ' + req.params.id);
            db.query('delete from producto where id_prod = ' + req.params.id)
            res.json({text: 'vuelo borrado ' + req.params.id});
        } else {
            res.json({text: 'No existe un vuelo con ese ID'});
        }
    }

    public async busqueda (req: Request, res: Response) {
        console.log(req.body)
        var querI = 
            "from vuelo v, producto p, aeropuerto a1, aeropuerto a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_aero = v.aero_salida \
            and a2.id_aero = v.aero_llegad \
            and p2.id_prov = v.id_prov "
        if (req.body.clase == "turista") 
            querI = querI.concat(" and v.ocup_asi_tur + ").concat(req.body.num_viaj).concat(" <= v.num_asi_tur"); 
        else if (req.body.clase == "bussiness")
            querI = querI.concat(" and v.ocup_asi_buss + ").concat(req.body.num_viaj).concat(" <= v.num_asi_buss"); 
        else if (req.body.clase == "primera")
            querI = querI.concat(" and v.ocup_asi_buss + ").concat(req.body.num_viaj).concat(" <= v.num_asi_buss"); 
        var querV = querI;
        querI = querI.concat(" and date(fecha) = ").concat("'").concat(req.body.ida).concat("'");
        querI = querI.concat(" and v.aero_salida = ".concat(req.body.desde));
        if (!!req.body.hacia)
            querI = querI.concat(" and v.aero_llegad = ".concat(req.body.hacia));

        querV = querV.concat(" and date(fecha) = ").concat("'").concat(req.body.vuelta).concat("'");
        if (!!req.body.hacia)
            querV = querV.concat(" and v.aero_salida = ".concat(req.body.hacia));
        querV = querV.concat(" and v.aero_llegad = ".concat(req.body.desde));
        
        var retur;
        if (!!req.body.vuelta) {
            retur = await db.query(
                "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre aero_sal_nombre, a1.cod_iata cod_iata_sal, \
                 a2.nombre aero_lleg_nombre, a2.cod_iata cod_iata_lleg, \
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI).concat(" union ")
                .concat("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                a1.nombre aero_sal_nombre, a1.cod_iata cod_iata_sal, \
                a2.nombre aero_lleg_nombre, a2.cod_iata cod_iata_lleg, \
                p2.nombre nombre_prov, p2.sede sede_prov, 'vuelta' ").concat(querV));
        } else {
            retur = await db.query(
                "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre aero_sal_nombre, a1.cod_iata cod_iata_sal, \
                 a2.nombre aero_lleg_nombre, a2.cod_iata cod_iata_lleg, \
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI));
        }
        res.json(retur);
    }
}

export const vuelosController = new VuelosController();