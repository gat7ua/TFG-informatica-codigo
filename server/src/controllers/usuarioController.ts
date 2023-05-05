import {Request, Response} from 'express';

import db from '../database';

class UsuarioController {
    public async list (req: Request, res: Response) {
        const retur = await db.query("select * from usuario");
        res.json(retur);

    }

    public async get (req: Request, res: Response) {
        const retur = await db.query("select * from usuario where id_usua = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el usuario");
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const consul = await db.query("select * from usuario where email = '" + req.body.email + "'")
        console.log(req.body.email);
        if (consul.length <= 0) {
            await db.query("call insertaCliente('"+ req.body.nif + "', '" + req.body.nombre  + "', '" + req.body.apellido1  + "', '" + req.body.apellido2 
                            + "', '" + req.body.email  + "', '" + req.body.password + "', '" + req.body.direccion + "');");
            res.json({text: 'usuario creado'});
        } else {
            res.json({text: 'Ya existe un usuario con ese email'});
        }
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from usuario where id_usua = " + req.params.id)
        if (consul.length > 0) {
            await db.query("update usuario u" 
                                + "set u.nif = '" + req.body.nif + "', '" 
                                + "u.nombre = '" + req.body.nombre  + "', '" 
                                + "u.apellido1 = '" + req.body.apellido1 + "', '" 
                                + "u.apellido2 = '" + req.body.apellido2 + "', '" 
                                + "u.email = '" + req.body.email  + "', '" 
                                + "u.password = '" + req.body.password + "', '" 
                                + "u.direccion = '" + req.body.direccion 
                            + "' where id_usua = " + req.params.id);
            res.json({text: 'usuario actualizado'});
        } else {
            res.json({text: 'No existe un usuario con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from usuario where id_usua = " + req.params.id)
        if (consul.length > 0) {
            db.query("delete from usuario where id_usua = " + req.params.id);
            res.json({text: 'usuario borrado ' + req.params.id});
        } else {
            res.json({text: 'No existe un usuario con ese ID'});
        }
    }
}

export const usuarioController = new UsuarioController();