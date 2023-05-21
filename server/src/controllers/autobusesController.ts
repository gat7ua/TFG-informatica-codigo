import {Request, Response} from 'express';

import db from '../database';

class AutobusesController {
    public list (req: Request, res: Response) {
        
    }

    public get (req: Request, res: Response) {
        
    }

    create (req: Request, res: Response) {
        
    }
    
    update (req: Request, res: Response) {
        
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
        querI = querI.concat(" and v.esau_salida = ".concat(req.body.desde));
        if (!!req.body.hacia)
            querI = querI.concat(" and v.esau_llegad = ".concat(req.body.hacia));

        querV = querV.concat(" and date(fecha) = ").concat("'").concat(req.body.vuelta).concat("'");
        if (!!req.body.hacia)
            querV = querV.concat(" and v.esau_salida = ".concat(req.body.hacia));
        querV = querV.concat(" and v.esau_llegad = ".concat(req.body.desde));
        
        var retur;
        if (!!req.body.vuelta) {
            retur = await db.query(
                "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre esau_sal_nombre, \
                 a2.nombre esau_lleg_nombre,\
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI).concat(" union ")
                .concat("select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                a1.nombre esau_sal_nombre, \
                a2.nombre esau_lleg_nombre, \
                p2.nombre nombre_prov, p2.sede sede_prov, 'vuelta' ").concat(querV));
        } else {
            retur = await db.query(
                "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup, \
                 a1.nombre esau_sal_nombre, \
                 a2.nombre esau_lleg_nombre, \
                 p2.nombre nombre_prov, p2.sede sede_prov, 'ida' ".concat(querI));
        }
        res.json(retur);
    }
}

export const autobusesController = new AutobusesController();