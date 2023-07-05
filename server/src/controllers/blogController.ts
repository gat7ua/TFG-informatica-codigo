import {Request, Response} from 'express';

import db from '../database';

class BlogController {
    public async list (req: Request, res: Response) {
        const retur = await db.query(
            "select * from publicacion"
        );
        return res.json(retur);
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query(
            "select * from publicacion where id_publ = " + req.params.id
        );
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el publ");
    }

    public async create (req: Request, res: Response) {
        console.log(req.body);
        await db.query("call insertaPublicacion('"+ 
            req.body.titulo + "', '" +
            req.body.texto +"', " + 
            req.body.id_usua + 
        ");");
        res.json({text: 'publ creado'});
    }
    
    public async update (req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from publicacion where id_publ = " + req.params.id)
        if (consul.length > 0) {
            await db.query(
                "update publicacion c set " + 
                "titulo = " + req.body.titulo + ", " +
                "texto = " + req.body.texto + ", " +
                "where id_publ = " + req.params.id + ";");
            res.json({text: 'publ actualizado'});
        } else {
            res.json({text: 'No existe un publ con ese ID'});
        }
    }

    public async delete (req: Request, res: Response) {
        await db.query('delete from publicacion where id_publ = ' + req.params.id);
        res.json({text: 'publ borrado ' + req.params.id});
    }

    public async listC(req: Request, res: Response) {
        const retur = await db.query(
            "select * from mensaje where id_publ = " + req.params.id
        );
        return res.json(retur);
    }

    
    public async listAC(req: Request, res: Response) {
        const retur = await db.query(
            "select * from mensaje"
        );
        return res.json(retur);
    }

    public async postC(req: Request, res: Response) {
        console.log(req.body);
        await db.query("call insertaMensaje('"+ 
            req.body.texto + "', " +
            req.params.id +", " + 
            req.body.id_usua + 
        ");");
        res.json({text: 'publ creado'});

    }

    public async putC(req: Request, res: Response) {
        console.log(req.body);
        const consul = await db.query("select * from mensaje where id_mens = " + req.params.idc)
        if (consul.length > 0) {
            await db.query(
                "update mensaje c set " + 
                "texto = '" + req.body.texto + "' " +
                "where id_mens = " + req.params.idc + ";");
            res.json({text: 'mens actualizado'});
        } else {
            res.json({text: 'No existe un mens con ese ID'});
        }
    }

    public async deleteC(req: Request, res: Response) {
        await db.query('delete from mensaje where id_mens = ' + req.params.idc);
        res.json({text: 'mens borrado ' + req.params.idc});
    }
}

export const blogController = new BlogController();