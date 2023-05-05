import {Request, Response} from 'express';

import db from '../database';

class AeropuertoController {
    public async list (req: Request, res: Response) {
        const retur = await db.query("select * from aeropuerto");
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
        await db.query("call insertaAeropuerto('"+ req.body.nombre + "', " + req.body.id_ciud + ", '" + req.body.piata + "', '" + req.body.picao + "');");
        res.json({text: 'aeropuerto creado'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from aeropuerto where id_aero = " + req.params.id)
        if (consul.length > 0) {
            await db.query("update aeropuerto c set c.nombre = '" + req.body.nombre + "', id_ciud = " + req.body.id_ciud + ", '" 
                            + req.body.piata + "', '" + req.body.picao + "' where id_aero = " + req.params.id);
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
}

export const aeropuertoController = new AeropuertoController();