import {Request, Response} from 'express';

import db from '../database';

class OficinaRentController {
    public async list (req: Request, res: Response) {
        const retur = await db.query(
            "select a.*, c.nombre nombre_ciud, c.pais \
             from oficinarent a, ciudad c \
             where a.id_ciud = c.id_ciud;");
        //console.log(retur);
        res.json(retur);
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query("select * from oficinarent where id_ofre = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe la oficina");
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await db.query("call insertaOficinaRent('"+ req.body.nombre + "', " + req.body.id_ciud + ");");
        res.json({text: 'oficina creada'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from oficinarent where id_ofre = " + req.params.id)
        if (consul.length > 0) {
            await db.query("update oficinarent c set c.nombre = '" + req.body.nombre + "', id_ciud = " + req.body.id_ciud + 
                           " where id_ofre = " + req.params.id);
            res.json({text: 'oficina actualizada'});
        } else {
            res.json({text: 'No existe una oficina con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from oficinarent where id_ofre = " + req.params.id)
        if (consul.length > 0) {
            db.query("delete from oficinarent where id_ofre = " + req.params.id);
            res.json({text: 'oficina borrada ' + req.params.id});
        } else {
            res.json({text: 'No existe una oficina con ese ID'});
        }
    }
}

export const oficinaRentController = new OficinaRentController();