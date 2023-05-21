import { Router } from 'express';
import { proveedorController } from '../controllers/proveedorController'

class proveedorRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', proveedorController.list);        
        this.router.get('/:id', proveedorController.get);
        this.router.post('/', proveedorController.create);
        this.router.put('/:id', proveedorController.update);
        this.router.delete('/:id', proveedorController.delete);
    }
}

const prr = new proveedorRoutes();

export default prr.router;