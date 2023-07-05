import {Request, Response} from 'express';

import db from '../database';

class UsuarioController {
    public async list (req: Request, res: Response) {
        const retur = await db.query("select * from usuarioComple");
        res.json(retur);

    }

    public async get (req: Request, res: Response) {
        const retur = await db.query("select * from usuario where email = '" + req.params.email + "'");
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el usuario");
    }

    public async getId(req: Request, res: Response) {
        const retur = await db.query("select * from usuario where id_usua = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el usuario");
    }

    public async rol (req: Request, res: Response) {
        console.log(req.params.email);
        const retur = await db.query("select * from usuario where email = '" + req.params.email + "'");
        if (retur.length > 0) {
            console.log('esta registrado')
            const r2 = await db.query("select * from agente where id_usua = " + retur[0].id_usua);
            if (r2.length > 0)
                return res.json({rol: "agente"});
            const r3 = await db.query("select * from administrador where id_usua = " + retur[0].id_usua);
            if (r3.length > 0)
                return res.json({rol: "admin"});
            return res.json({rol: "cliente"});
        } 
        res.status(404).json("No existe el usuario");
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const consul = await db.query("select * from usuario where email = '" + req.body.email + "'")
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
            await db.query("update usuario u " 
                                + "set u.nif = '" + req.body.nif + "', " 
                                + "u.nombre = '" + req.body.nombre  + "', " 
                                + "u.apellido1 = '" + req.body.apellido1 + "', " 
                                + "u.apellido2 = '" + req.body.apellido2 + "', " 
                                + "u.email = '" + req.body.email  + "', " 
                                + "u.password = '" + req.body.password + "', " 
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

    public async gToken (req: Request, res: Response) {
        console.log(req.body);
        if (req.body.token == "") {
            res.json({text: 'token invalido'});
            return;
        }
        const consul = await db.query("select * from tokens where id_usua = " + req.body.id_usua)
        var fech = new Date();
        fech.setDate(fech.getDate() + 30);
        await db.query("insert into tokens values (" + req.body.id_usua + ", " + "'" + req.body.token + "', '" 
            + fech.getFullYear() + "-" + (fech.getMonth() + 1) + "-" + fech.getDate() + " " + fech.getHours() + ":" + fech.getMinutes() + ":" + fech.getSeconds() + "')");
        res.json({text: "Token guardado"})
    }

    public async verifToken(req: Request, res: Response) {
        if (req.body.token == "") {
            res.json({text: 'token invalido'});
            return;
        }
        const consul = await db.query("select * from tokens where id_usua = " + req.body.id_usua)
        if (consul.length == 0) {
            res.json({text: 'no tiene token'});
            return;
        }
        if (new Date(consul[0].fecha_expira) < new Date()) {
            res.json({text: "expirado"})
            return;
        }
        for (var cons of consul) {
            if (cons.token == req.body.token && 
                    new Date(cons.fecha_expira) > new Date()) {
                res.json({text: "correcto"});
                return;
            }
        }
        res.json({text: "invalido"});
    }

    public async logIn(req: Request, res: Response) {
        if (req.body.email == "" || req.body.password == "" ||
            req.body.email == undefined || req.body.password == undefined) {
            res.json({text: 'falta usuario o contraseña'});
            return;
        }
        const consul = await db.query("select * from usuario where email = '" + req.body.email + "'")
        if (consul.length == 0) {
            res.json({text: 'no existe el usuario'});
            return;
        }
        if (consul[0].email == req.body.email &&
            consul[0].password == req.body.password
            ) {
            res.json({text: "correcto"});
            return;
        }
        res.json({text: "invalido"});
    }

    public async setAgente(req: Request, res: Response) {
        const retur = await db.query("select * from usuario where id_usua = " + req.params.id);
        if (retur.length > 0) {
            const retur2 = await db.query("select * from agente where id_usua = " + req.params.id);
            if (retur2.length > 0) {
                res.json({text: "ya es agente"});
                return;
            }
            const retur3 = await db.query("select * from administrador where id_usua = " + req.params.id);
            if (retur3.length > 0) {
                await db.query("delete from administrador where id_usua = " + req.params.id);
            }
            await db.query("insert into agente values (" + req.params.id + ")");
            res.json({text: "correcto"});
            return;
        }
        res.json({text: "invalido"});
    }

    public async setAdmin(req: Request, res: Response) {
        const retur = await db.query("select * from usuario where id_usua = " + req.params.id);
        if (retur.length > 0) {
            const retur3 = await db.query("select * from administrador where id_usua = " + req.params.id);
            if (retur3.length > 0) {
                res.json({text: "ya es administrador"});
                return;
            }
            const retur2 = await db.query("select * from agente where id_usua = " + req.params.id);
            if (retur2.length > 0) {
                await db.query("delete from agente where id_usua = " + req.params.id);
            }
            await db.query("insert into administrador values (" + req.params.id + ")");
            res.json({text: "correcto"});
            return;
        }
        res.json({text: "invalido"});
    }

    public async setCliente(req: Request, res: Response) {
        const retur = await db.query("select * from usuario where id_usua = " + req.params.id);
        if (retur.length > 0) {
            const retur3 = await db.query("select * from administrador where id_usua = " + req.params.id);
            if (retur3.length > 0) {
                await db.query("delete from administrador where id_usua = " + req.params.id);
            }
            const retur2 = await db.query("select * from agente where id_usua = " + req.params.id);
            if (retur2.length > 0) {
                await db.query("delete from agente where id_usua = " + req.params.id);
            }
            res.json({text: "correcto"});
            return;
        }
        res.json({text: "invalido"});
    }
}

export const usuarioController = new UsuarioController();