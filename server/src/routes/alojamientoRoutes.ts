import { Router } from 'express';
import { alojamientosController } from '../controllers/alojamientoController';

class AlojamientosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', alojamientosController.list); 
        this.router.post('/busqueda', alojamientosController.busqueda);        
        this.router.get('/:id', alojamientosController.get);
        this.router.post('/', alojamientosController.create);
        this.router.put('/:id', alojamientosController.update);
        this.router.delete('/:id', alojamientosController.delete);
    }
}

const alr = new AlojamientosRoutes();

export default alr.router;