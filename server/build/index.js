"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const vuelosRoutes_1 = __importDefault(require("./routes/vuelosRoutes"));
const ciudadRoutes_1 = __importDefault(require("./routes/ciudadRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const aeropuertoRoutes_1 = __importDefault(require("./routes/aeropuertoRoutes"));
const autobusesRoutes_1 = __importDefault(require("./routes/autobusesRoutes"));
const estAutobusRoutes_1 = __importDefault(require("./routes/estAutobusRoutes"));
const estTrenController_1 = __importDefault(require("./routes/estTrenController"));
const proveedorRoutes_1 = __importDefault(require("./routes/proveedorRoutes"));
const trenesRoutes_1 = __importDefault(require("./routes/trenesRoutes"));
const pedidosRoutes_1 = __importDefault(require("./routes/pedidosRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 4500);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/vuelos', vuelosRoutes_1.default);
        this.app.use('/api/ciudad', ciudadRoutes_1.default);
        this.app.use('/api/usuario', usuarioRoutes_1.default);
        this.app.use('/api/aeropuerto', aeropuertoRoutes_1.default);
        this.app.use('/api/autobuses', autobusesRoutes_1.default);
        this.app.use('/api/estautobus', estAutobusRoutes_1.default);
        this.app.use('/api/esttren', estTrenController_1.default);
        this.app.use('/api/proveedor', proveedorRoutes_1.default);
        this.app.use('/api/trenes', trenesRoutes_1.default);
        this.app.use('/api/pedido', pedidosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
