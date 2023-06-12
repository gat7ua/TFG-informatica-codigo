import {Request, Response} from 'express';

import db from '../database';

class PedidosController {

    public async list (req: Request, res: Response) {
        const retur = await db.query("select * from pedido");
        res.json(retur);
    }

    public async listUsuario (req: Request, res: Response) {
        const retur = await db.query("select * from pedidoUsuarios where id_usua = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existen pedidos para el usuario");
    }

    public async get (req: Request, res: Response) {
        const retur = await db.query("select * from pedidoUsuarios where id_pedi = " + req.params.id);
        if (retur.length > 0) {
            return res.json(retur[0]);
        } 
        res.status(404).json("No existe el pedido");
    }

    public async insertaLinea (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        if (!req.body.id_usua) {
            res.json({text: 'usuario nulo'});
            return;
        }
        if (!req.body.id_prod) {
            res.json({text: 'producto nulo'});
            return;
        }
        if (!req.body.importe) {
            res.json({text: 'importe nulo'});
            return;
        }
        if (!req.body.unidades) {
            res.json({text: 'unidades nulo'});
            return;
        }
        var categ;
        if (!!req.body.categoria)
            categ = req.body.categoria == 'bussiness' ? '\'B\'' : (req.body.categoria == 'primera' ? '\'P\'' : null);
        else
            categ = null;

        await db.query("call insertaLineaPedido("+ req.body.id_usua + ", " + req.body.id_prod + ", " + req.body.importe + ", " + req.body.unidades + ", " + categ + ");");
        res.json({text: 'Linea creada'});
    }
    
    public async update (req: Request, res: Response) {
        
    }

    public async confirmaPedido(req: Request, res: Response) {
        const consul = await db.query("select * from pedido where estadoPedido = 'P' and id_pedi = " + req.params.id)
        if (consul.length > 0) {
            await db.query("call confirmaPedido(" + req.params.id +")");
            res.json({text: 'pedido confirmado'});
        } else {
            res.json({text: 'No existe un pedido con ese ID'});
        }   
    }

    public async cancelaPedido(req: Request, res: Response) {
        const consul = await db.query("select * from pedido where estadoPedido = 'C' and id_pedi = " + req.params.id)
        if (consul.length > 0) {
            await db.query("call cancelaPedido(" + req.params.id +")");
            res.json({text: 'pedido cancelado'});
        } else {
            res.json({text: 'No existe un pedido con ese ID'});
        }   
    }

    public async delete (req: Request, res: Response) {
        const consul = await db.query("select * from pedido where id_pedi = " + req.params.id)
        if (consul.length > 0) {
            db.query("delete from pedido where id_pedi = " + req.params.id);
            res.json({text: 'pedido borrado ' + req.params.id});
        } else {
            res.json({text: 'No existe un proveedor con ese ID'});
        }
    }

    public async deleteLinea (req: Request, res: Response) {
        const consul = await db.query("select * from lineapedido where id_pedi = " + req.params.id_p + " and linea = " + req.params.linea)
        if (consul.length > 0) {
            db.query("call eliminaLineaPedido(" + req.params.id_p + ", " + req.params.linea + ");");
            res.json({text: 'pedido borrado ' + req.params.id_p + ", linea " + req.params.linea});
        } else {
            res.json({text: 'No existe un pedido con ese ID o esa linea'});
        }
    }
}

export const pedidosController = new PedidosController();