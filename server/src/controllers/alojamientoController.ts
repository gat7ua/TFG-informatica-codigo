import {Request, Response} from 'express';

import db from '../database';

class AlojamientoController {
    public async list (req: Request, res: Response) {
        const retur = await db.query(
            "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup \
            from alojamiento v, producto p, ciudad c \
            where v.id_prod = p.id_prod \
            and c.id_ciud = v.id_ciud "
        );
        return res.json(retur);
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query(
            "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup \
            from alojamiento v, producto p, ciudad c \
            where v.id_prod = p.id_prod \
            and c.id_ciud = v.id_ciud \
            and v.id_prod = " + req.params.id
        );
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el alojamiento");
    }

    public async create (req: Request, res: Response) {
        console.log(req.body);
        await db.query("call insertaAlojamiento("+ 
            req.body.precio_unitario + ", " +
            req.body.uds_disponibles +", " + 
      "'" + req.body.cod_aloj + "', " +
            req.body.num_camas + ", " + 
            req.body.num_aseos + ", '" +
            req.body.nombre + "', '" + 
            req.body.descripcion + "', " + 
            req.body.id_ciud +
        ");");
        res.json({text: 'alojamiento creado'});
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
                "update alojamiento c set " + 
                "cod_aloj = '" + req.body.cod_aloj + "', "+
                "num_camas = " + req.body.num_camas + ", "+
                "num_aseos = " + req.body.num_aseos + ", "+
                "nombre = '" + req.body.nombre + "', "+
                "descripcion = '" + req.body.descripcion + "', "+
                "id_ciud = " + req.params.id_ciud +  ", " +
                "where id_prod = " + req.body.id_prod + ";");
            res.json({text: 'alojamiento actualizado'});
        } else {
            res.json({text: 'No existe un alojamiento con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        const consul = await db.query("select * from alojamiento where id_prod = " + req.params.id)
        if (consul.length > 0) {
            db.query('delete from alojamiento where id_prod = ' + req.params.id);
            db.query('delete from producto where id_prod = ' + req.params.id)
            res.json({text: 'alojamiento borrado ' + req.params.id});
        } else {
            res.json({text: 'No existe un alojamiento con ese ID'});
        }
    }

    public async busqueda (req: Request, res: Response) {
        console.log(req.body)
        var querI = 
            "select v.*, p.precio_unitario, p.uds_disponibles, p.uds_ocup \
            from alojamiento v, producto p, ciudad c \
            where v.id_prod = p.id_prod \
            and c.id_ciud = v.id_ciud \
            and not exists ( \
                select 1 from ocupacion o \
                where o.estado = 'C' \
                and o.id_prod = v.id_prod \
                and o.fechaIni = '" + req.body.chIn + "' \
            )";
        if (req.body.cod_aloj == "HO") 
            querI = querI.concat(" and v.cod_aloj = 'HO' "); 
        else if (req.body.cod_aloj == "HS") 
            querI = querI.concat(" and v.cod_aloj = 'HS' "); 
        else if (req.body.cod_aloj == "AL") 
            querI = querI.concat(" and v.cod_aloj = 'AL' "); 
        else if (req.body.cod_aloj == "AP") 
            querI = querI.concat(" and v.cod_aloj = 'AP' "); 
        querI = querI.concat(" and p.uds_disponibles >= " + req.body.uds);
        querI = querI.concat(" and v.num_camas >= " + req.body.num_perso);
        var retur = await db.query(querI)
        res.json(retur);
    }
}

export const alojamientosController = new AlojamientoController();