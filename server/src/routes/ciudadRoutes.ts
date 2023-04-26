import { Router } from 'express';
import { ciudadController } from '../controllers/ciudadController'

class ciudadRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ciudadController.list);        
        this.router.get('/:id', ciudadController.get);
        this.router.post('/', ciudadController.create);
        this.router.put('/:id', ciudadController.update);
        this.router.delete('/:id', ciudadController.delete);
    }
}

const cr = new ciudadRoutes();

export default cr.router;