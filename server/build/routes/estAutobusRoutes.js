"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estAutobusController_1 = require("../controllers/estAutobusController");
class estAutobusRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', estAutobusController_1.estAutobusController.list);
        this.router.get('/:id', estAutobusController_1.estAutobusController.get);
        this.router.post('/', estAutobusController_1.estAutobusController.create);
        this.router.put('/:id', estAutobusController_1.estAutobusController.update);
        this.router.delete('/:id', estAutobusController_1.estAutobusController.delete);
    }
}
const ear = new estAutobusRoutes();
exports.default = ear.router;
