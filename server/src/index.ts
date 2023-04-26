import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import ir from './routes/indexRoutes';
import vr from './routes/vuelosRoutes';
import cr from './routes/ciudadRoutes';

class Server {

    public app: Application; 

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.port || 4500);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }

    routes(): void {
        this.app.use(ir);
        this.app.use('/api/vuelos', vr);
        this.app.use('/api/ciudad', cr);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();