import { Router } from 'express';
import { blogController } from '../controllers/blogController'

class blogRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', blogController.list);   
        this.router.get('/:id', blogController.get);
        this.router.post('/', blogController.create);
        this.router.put('/:id', blogController.update);
        this.router.delete('/:id', blogController.delete);

        
        this.router.get('/:id/comm', blogController.listC);  
        this.router.get('/comm/g', blogController.listAC);  
        this.router.post('/:id/comm', blogController.postC);
        this.router.put('/:id/comm/:idc', blogController.putC);
        this.router.delete('/:id/comm/:idc', blogController.deleteC);
    }
}

const bbr = new blogRoutes();

export default bbr.router;