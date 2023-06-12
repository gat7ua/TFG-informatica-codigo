"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidosController_1 = require("../controllers/pedidosController");
class pedidosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', pedidosController_1.pedidosController.list);
        this.router.get('/cesta/:id', pedidosController_1.pedidosController.listUsuario);
        this.router.get('/:id', pedidosController_1.pedidosController.get);
        this.router.get('/confirma/:id', pedidosController_1.pedidosController.confirmaPedido);
        this.router.get('/cancela/:id', pedidosController_1.pedidosController.cancelaPedido);
        this.router.post('/', pedidosController_1.pedidosController.insertaLinea);
        this.router.put('/:id', pedidosController_1.pedidosController.update);
        this.router.delete('/:id', pedidosController_1.pedidosController.delete);
        this.router.delete('/:id_p/:linea', pedidosController_1.pedidosController.deleteLinea);
    }
}
const pdr = new pedidosRoutes();
exports.default = pdr.router;
