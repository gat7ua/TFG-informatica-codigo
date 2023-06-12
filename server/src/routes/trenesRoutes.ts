import { Router } from 'express';
import { trenesController } from '../controllers/trenesController'

class trenesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', trenesController.list); 
        this.router.post('/busqueda', trenesController.busqueda);        
        this.router.get('/:id', trenesController.get);
        this.router.post('/', trenesController.create);
        this.router.put('/:id', trenesController.update);
        this.router.delete('/:id', trenesController.delete);
    }
}

const trs = new trenesRoutes();

export default trs.router;