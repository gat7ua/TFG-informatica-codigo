import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController'

class usuarioRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usuarioController.list);        
        this.router.get('/:email', usuarioController.get);   
        this.router.get('/rol/:email', usuarioController.rol);
        this.router.post('/registrar', usuarioController.create);
        this.router.post('/token', usuarioController.gToken);
        this.router.post('/token/verif', usuarioController.verifToken);
        this.router.post('/login', usuarioController.logIn);
        this.router.put('/:id', usuarioController.update);
        this.router.delete('/:id', usuarioController.delete);
    }
}

const ur = new usuarioRoutes();

export default ur.router;