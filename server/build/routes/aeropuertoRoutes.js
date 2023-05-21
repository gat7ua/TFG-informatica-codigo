"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aeropuertoController_1 = require("../controllers/aeropuertoController");
class aeropuertoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', aeropuertoController_1.aeropuertoController.list);
        this.router.get('/:id', aeropuertoController_1.aeropuertoController.get);
        this.router.post('/', aeropuertoController_1.aeropuertoController.create);
        this.router.put('/:id', aeropuertoController_1.aeropuertoController.update);
        this.router.delete('/:id', aeropuertoController_1.aeropuertoController.delete);
        this.router.get('/cuentaida/:id', aeropuertoController_1.aeropuertoController.cuentaIda);
        this.router.get('/cuentavue/:id', aeropuertoController_1.aeropuertoController.cuentaVuelta);
    }
}
const apr = new aeropuertoRoutes();
exports.default = apr.router;
