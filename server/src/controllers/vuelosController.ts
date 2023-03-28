import {Request, Response} from 'express';

import db from '../database';

class VuelosController {
    public list (req: Request, res: Response) {
        db.query('select * from vuelo');
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
        res.json({text: 'vuelo borrado ' + req.params.id});
    }
}

export const vuelosController = new VuelosController();