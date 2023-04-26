"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ciudadController_1 = require("../controllers/ciudadController");
class ciudadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ciudadController_1.ciudadController.list);
        this.router.get('/:id', ciudadController_1.ciudadController.get);
        this.router.post('/', ciudadController_1.ciudadController.create);
        this.router.put('/:id', ciudadController_1.ciudadController.update);
        this.router.delete('/:id', ciudadController_1.ciudadController.delete);
    }
}
const cr = new ciudadRoutes();
exports.default = cr.router;
