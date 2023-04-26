import {Request, Response} from 'express';

import db from '../database';

class VuelosController {
    public list (req: Request, res: Response) {
        //db.query('call insertaOferta(4000000, \'2020-12-12\', \'2020-12-15\', 1.25)');
        res.send('Vuelos');
    }

    public get (req: Request, res: Response) {
        db.query('describe vuelo');
        res.json({text: 'vuelo ' + req.params.id});
    }

    create (req: Request, res: Response) {
        res.json({text: 'vuelo creado'});
    }
    
    update (req: Request, res: Response) {
        res.json({text: 'vuelo actualizado ' + req.params.id});
    }

    delete (req: Request, res: Response) {
        db.query('delete from vuelo where id_prod = ' + req.params.id);
        db.query('delete from producto where id_prod = ' + req.params.id)
        res.json({text: 'vuelo borrado ' + req.params.id});
    }
}

export const vuelosController = new VuelosController();