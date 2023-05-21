import { Router } from 'express';
import { aeropuertoController } from '../controllers/aeropuertoController'

class aeropuertoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', aeropuertoController.list);        
        this.router.get('/:id', aeropuertoController.get);
        this.router.post('/', aeropuertoController.create);
        this.router.put('/:id', aeropuertoController.update);
        this.router.delete('/:id', aeropuertoController.delete);
        this.router.get('/cuentaida/:id', aeropuertoController.cuentaIda);
        this.router.get('/cuentavue/:id', aeropuertoController.cuentaVuelta);
    }
}

const apr = new aeropuertoRoutes();

export default apr.router;