"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alojamientoController_1 = require("../controllers/alojamientoController");
class AlojamientosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', alojamientoController_1.alojamientosController.list);
        this.router.post('/busqueda', alojamientoController_1.alojamientosController.busqueda);
        this.router.get('/:id', alojamientoController_1.alojamientosController.get);
        this.router.post('/', alojamientoController_1.alojamientosController.create);
        this.router.put('/:id', alojamientoController_1.alojamientosController.update);
        this.router.delete('/:id', alojamientoController_1.alojamientosController.delete);
    }
}
const alr = new AlojamientosRoutes();
exports.default = alr.router;
