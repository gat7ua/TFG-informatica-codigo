"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autobusesController_1 = require("../controllers/autobusesController");
class autobusesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', autobusesController_1.autobusesController.list);
        this.router.post('/busqueda', autobusesController_1.autobusesController.busqueda);
        this.router.get('/:id', autobusesController_1.autobusesController.get);
        this.router.post('/', autobusesController_1.autobusesController.create);
        this.router.put('/:id', autobusesController_1.autobusesController.update);
        this.router.delete('/:id', autobusesController_1.autobusesController.delete);
    }
}
const abs = new autobusesRoutes();
exports.default = abs.router;
