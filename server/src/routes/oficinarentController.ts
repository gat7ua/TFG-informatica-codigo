import { Router } from 'express';
import { oficinaRentController } from '../controllers/oficinarentController'

class oficinaRentRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', oficinaRentController.list);        
        this.router.get('/:id', oficinaRentController.get);
        this.router.post('/', oficinaRentController.create);
        this.router.put('/:id', oficinaRentController.update);
        this.router.delete('/:id', oficinaRentController.delete);
    }
}

const ofr = new oficinaRentRoutes();

export default ofr.router;