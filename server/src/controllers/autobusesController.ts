import {Request, Response} from 'express';

import db from '../database';

class AutobusesController {
    public async list (req: Request, res: Response) {
        const retur = await db.query(
            "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
            a1.nombre esta_sal_nombre, \
            a2.nombre esta_lleg_nombre, \
            p2.nombre nombre_prov, p2.sede sede_prov \
            from autobus v, producto p, estacionautobus a1, estacionautobus a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_esau = v.esta_salida \
            and a2.id_esau = v.esta_llegad \
            and p2.id_prov = v.id_prov "
        );
        return res.json(retur);
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query(
            "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
            a1.nombre esta_sal_nombre, \
            a2.nombre esta_lleg_nombre, \
            p2.nombre nombre_prov, p2.sede sede_prov \
            from autobus v, producto p, estacionautobus a1, estacionautobus a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_esau = v.esta_salida \
            and a2.id_esau = v.esta_llegad \
            and p2.id_prov = v.id_prov \
            and v.id_prod = " + req.params.id
        );
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el autobus");
    }

    public async create (req: Request, res: Response) {
        console.log(req.body);
        await db.query("call insertaAutobus("+ 
            req.body.precio_unitario + ", " +
            req.body.num_asi_tur +", " + 
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
        res.json({text: 'autobus creado'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from autobus where id_prod = " + req.params.id)
        if (consul.length > 0) {
            await db.query(
                "update producto c set " + 
                "precio_unitario = " + req.body.precio_unitario + ", " +
                "uds_disponibles = " + req.body.uds_disponibles + ", " +
                "uds_ocup = " + req.body.uds_ocup + " " +
                "where id_prod = " + req.body.id_prod + ";");
            await db.query(
                "update autobus c set " + 
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
            res.json({text: 'autobus actualizado'});
        } else {
            res.json({text: 'No existe un autobus con ese ID'});
        }
    }

    delete (req: Request, res: Response) {
        db.query('delete from autobus where id_prod = ' + req.params.id);
        db.query('delete from producto where id_prod = ' + req.params.id)
        res.json({text: 'autobus borrado ' + req.params.id});
    }

    public async busqueda (req: Request, res: Response) {
        console.log(req.body)
        var querI = 
            "from autobus v, producto p, estacionautobus a1, estacionautobus a2, proveedor p2 \
            where v.id_prod = p.id_prod \
            and a1.id_esau = v.esta_salida \
            and a2.id_esau = v.esta_llegad \
            and p2.id_prov = v.id_prov "
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
            retur = await db.query(
                "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre esta_sal_nombre, \
                 a2.nombre esta_lleg_nombre,\
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI).concat(" union ")
                .concat("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                a1.nombre esta_sal_nombre, \
                a2.nombre esta_lleg_nombre, \
                p2.nombre nombre_prov, p2.sede sede_prov, 'vuelta' ").concat(querV));
        } else {
            retur = await db.query(
                "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre esta_sal_nombre, \
                 a2.nombre esta_lleg_nombre, \
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI));
        }
        res.json(retur);
    }
}

export const autobusesController = new AutobusesController();