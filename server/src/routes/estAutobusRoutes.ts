import { Router } from 'express';
import { estAutobusController } from '../controllers/estAutobusController'

class estAutobusRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', estAutobusController.list);        
        this.router.get('/:id', estAutobusController.get);
        this.router.post('/', estAutobusController.create);
        this.router.put('/:id', estAutobusController.update);
        this.router.delete('/:id', estAutobusController.delete);
    }
}

const ear = new estAutobusRoutes();

export default ear.router;