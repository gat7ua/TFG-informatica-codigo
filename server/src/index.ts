import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import ir from './routes/indexRoutes';
import vr from './routes/vuelosRoutes';
import cr from './routes/ciudadRoutes';
import ur from './routes/usuarioRoutes';
import apr from './routes/aeropuertoRoutes';
import abs from './routes/autobusesRoutes';
import ear from './routes/estAutobusRoutes';
import etr from './routes/estTrenController';
import prr from './routes/proveedorRoutes';

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
        this.app.use('/api/usuario', ur);
        this.app.use('/api/aeropuerto', apr);
        this.app.use('/api/autobuses', abs);
        this.app.use('/api/estautobus', ear);
        this.app.use('/api/esttren', etr);
        this.app.use('/api/proveedor', prr);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();