import { Router } from 'express';
import { autobusesController } from '../controllers/autobusesController'

class autobusesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', autobusesController.list); 
        this.router.post('/busqueda', autobusesController.busqueda);        
        this.router.get('/:id', autobusesController.get);
        this.router.post('/', autobusesController.create);
        this.router.put('/:id', autobusesController.update);
        this.router.delete('/:id', autobusesController.delete);
    }
}

const abs = new autobusesRoutes();

export default abs.router;