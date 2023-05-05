import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController'

class usuarioRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usuarioController.list);        
        this.router.get('/:id', usuarioController.get);
        this.router.post('/registrar', usuarioController.create);
        this.router.put('/:id', usuarioController.update);
        this.router.delete('/:id', usuarioController.delete);
    }
}

const ur = new usuarioRoutes();

export default ur.router;