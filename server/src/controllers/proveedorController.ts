import {Request, Response} from 'express';

import db from '../database';

class ProveedorController {
    public async list (req: Request, res: Response) {
        const retur = await db.query("select * from proveedor");
        res.json(retur);
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query("select * from proveedor where id_prov = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el proveedor");
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await db.query("call insertaProveedor('"+ req.body.nombre + "', '" + req.body.sede + "');");
        res.json({text: 'proveedor creado'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from proveedor where id_prov = " + req.params.id)
        if (consul.length > 0) {
            await db.query("update proveedor c set c.nombre = '" + req.body.nombre + "', sede = '" + req.body.sede + "' where id_prov = " + req.params.id);
            res.json({text: 'proveedor actualizado'});
        } else {
            res.json({text: 'No existe un proveedor con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from proveedor where id_prov = " + req.params.id)
        if (consul.length > 0) {
            db.query("delete from proveedor where id_prov = " + req.params.id);
            res.json({text: 'proveedor borrado ' + req.params.id});
        } else {
            res.json({text: 'No existe un proveedor con ese ID'});
        }
    }
}

export const proveedorController = new ProveedorController();