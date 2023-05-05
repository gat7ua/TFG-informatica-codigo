import {Request, Response} from 'express';

import db from '../database';

class VuelosController {
    public list (req: Request, res: Response) {
        //db.query('call insertaOferta(4000000, \'2020-12-12\', \'2020-12-15\', 1.25)');
        res.send('Vuelos');
    }

    public get (req: Request, res: Response) {
        db.query('describe vuelo');
        res.json({text: 'vuelo ' + req.params.id});
    }

    create (req: Request, res: Response) {
        res.json({text: 'vuelo creado'});
    }
    
    update (req: Request, res: Response) {
        res.json({text: 'vuelo actualizado ' + req.params.id});
    }

    delete (req: Request, res: Response) {
        db.query('delete from vuelo where id_prod = ' + req.params.id);
        db.query('delete from producto where id_prod = ' + req.params.id)
        res.json({text: 'vuelo borrado ' + req.params.id});
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