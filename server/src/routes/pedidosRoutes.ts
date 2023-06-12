import { Router } from 'express';
import { pedidosController } from '../controllers/pedidosController'

class pedidosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', pedidosController.list);            
        this.router.get('/cesta/:id', pedidosController.listUsuario);  
        this.router.get('/:id', pedidosController.get);
        this.router.get('/confirma/:id', pedidosController.confirmaPedido); 
        this.router.get('/cancela/:id', pedidosController.cancelaPedido); 
        this.router.post('/', pedidosController.insertaLinea);
        this.router.put('/:id', pedidosController.update);
        this.router.delete('/:id', pedidosController.delete);
        this.router.delete('/:id_p/:linea', pedidosController.deleteLinea);
    }
}

const pdr = new pedidosRoutes();

export default pdr.router;