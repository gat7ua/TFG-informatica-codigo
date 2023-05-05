import { Router } from 'express';
import { vuelosController } from '../controllers/vuelosController'

class vuelosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', vuelosController.list); 
        this.router.post('/busqueda', vuelosController.busqueda);        
        this.router.get('/:id', vuelosController.get);
        this.router.post('/', vuelosController.create);
        this.router.put('/:id', vuelosController.update);
        this.router.delete('/:id', vuelosController.delete);
    }
}

const vr = new vuelosRoutes();

export default vr.router;