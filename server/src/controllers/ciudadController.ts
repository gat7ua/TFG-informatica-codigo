import {Request, Response} from 'express';

import db from '../database';

class CiudadController {
    public async list (req: Request, res: Response) {
        //res.send('Ciudades');
        const retur = await db.query("select * from ciudad");
        res.json(retur);

    }

    public async get (req: Request, res: Response) {
        const retur = await db.query("select * from ciudad where id_ciud = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe la ciudad");
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await db.query("call insertaCiudad('"+ req.body.nombre + "', '" + req.body.pais + "');");
        res.json({text: 'ciudad creada'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from ciudad where id_ciud = " + req.params.id)
        if (consul.length > 0) {
            await db.query("update ciudad c set c.nombre = '" + req.body.nombre + "', pais = '" + req.body.pais + "' where id_ciud = " + req.params.id);
            res.json({text: 'ciudad actualizada'});
        } else {
            res.json({text: 'No existe una ciudad con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from ciudad where id_ciud = " + req.params.id)
        if (consul.length > 0) {
            db.query("delete from ciudad where id_ciud = " + req.params.id);
            res.json({text: 'ciudad borrada ' + req.params.id});
        } else {
            res.json({text: 'No existe una ciudad con ese ID'});
        }
    }
}

export const ciudadController = new CiudadController();