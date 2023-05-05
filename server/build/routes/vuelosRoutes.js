"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vuelosController_1 = require("../controllers/vuelosController");
class vuelosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', vuelosController_1.vuelosController.list);
        this.router.post('/busqueda', vuelosController_1.vuelosController.busqueda);
        this.router.get('/:id', vuelosController_1.vuelosController.get);
        this.router.post('/', vuelosController_1.vuelosController.create);
        this.router.put('/:id', vuelosController_1.vuelosController.update);
        this.router.delete('/:id', vuelosController_1.vuelosController.delete);
    }
}
const vr = new vuelosRoutes();
exports.default = vr.router;
