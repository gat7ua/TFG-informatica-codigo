import {Request, Response} from 'express';

import db from '../database';

class EstAutobusController {
    public async list (req: Request, res: Response) {
        const retur = await db.query(
            "select a.*, c.nombre nombre_ciud, c.pais \
             from estacionautobus a, ciudad c \
             where a.id_ciud = c.id_ciud;");
        //console.log(retur);
        res.json(retur);
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query("select * from estacionautobus where id_esau = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe la estacion de autobuses");
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await db.query("call insertaEstacionBus('"+ req.body.nombre + "', " + req.body.id_ciud + ");");
        res.json({text: 'estacion de autobuses creada'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from estacionautobus where id_esau = " + req.params.id)
        if (consul.length > 0) {
            await db.query("update estacionautobus c set c.nombre = '" + req.body.nombre + "', id_ciud = " + req.body.id_ciud + 
                           " where id_esau = " + req.params.id);
            res.json({text: 'estacion de autobuses actualizada'});
        } else {
            res.json({text: 'No existe una estacion de autobuses con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from estacionautobus where id_esau = " + req.params.id)
        if (consul.length > 0) {
            db.query("delete from estacionautobus where id_esau = " + req.params.id);
            res.json({text: 'estacion de autobuses borrada ' + req.params.id});
        } else {
            res.json({text: 'No existe una estacion de autobuses con ese ID'});
        }
    }
}

export const estAutobusController = new EstAutobusController();