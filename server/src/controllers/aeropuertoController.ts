import {Request, Response} from 'express';

import db from '../database';

class AeropuertoController {
    public async list (req: Request, res: Response) {
        const retur = await db.query(
            "select a.*, c.nombre nombre_ciud, c.pais \
             from aeropuerto a, ciudad c \
             where a.id_ciud = c.id_ciud;");
        //console.log(retur);
        res.json(retur);
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query("select * from aeropuerto where id_aero = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el aeropuerto");
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await db.query("call insertaAeropuerto('"+ req.body.nombre + "', " + req.body.id_ciud + ", '" + req.body.cod_iata + "');");
        res.json({text: 'aeropuerto creado'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from aeropuerto where id_aero = " + req.params.id)
        if (consul.length > 0) {
            await db.query("update aeropuerto c set c.nombre = '" + req.body.nombre + "', id_ciud = " + req.body.id_ciud + 
                           ", cod_iata= '" + req.body.cod_iata + "' where id_aero = " + req.params.id);
            res.json({text: 'aeropuerto actualizado'});
        } else {
            res.json({text: 'No existe un aeropuerto con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from aeropuerto where id_aero = " + req.params.id)
        if (consul.length > 0) {
            db.query("delete from aeropuerto where id_aero = " + req.params.id);
            res.json({text: 'aeropuerto borrado ' + req.params.id});
        } else {
            res.json({text: 'No existe un aeropuerto con ese ID'});
        }
    }

    public async cuentaIda (req: Request, res: Response) {
        const consul = await db.query("select * from aeropuerto where id_aero = " + req.params.id)
        if (consul.length > 0) {
            const retur = await db.query("select count(*) cuenta from vuelo v where v.aero_salida = " + req.params.id);
            res.json(retur[0]);
        } else {
            res.json({text: 'No existe un aeropuerto con ese ID'});
        }
    }

    public async cuentaVuelta (req: Request, res: Response) {
        const consul = await db.query("select * from aeropuerto where id_aero = " + req.params.id)
        if (consul.length > 0) {
            const retur = await db.query("select count(*) cuenta from vuelo v where v.aero_llegad = " + req.params.id);
            res.json(retur[0]);
        } else {
            res.json({text: 'No existe un aeropuerto con ese ID'});
        }
    }
}

export const aeropuertoController = new AeropuertoController();