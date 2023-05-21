import { Router } from 'express';
import { estTrenController } from '../controllers/estTrenController'

class estTrenRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', estTrenController.list);        
        this.router.get('/:id', estTrenController.get);
        this.router.post('/', estTrenController.create);
        this.router.put('/:id', estTrenController.update);
        this.router.delete('/:id', estTrenController.delete);
    }
}

const etr = new estTrenRoutes();

export default etr.router;