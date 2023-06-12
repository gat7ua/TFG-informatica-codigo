"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trenesController_1 = require("../controllers/trenesController");
class trenesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', trenesController_1.trenesController.list);
        this.router.post('/busqueda', trenesController_1.trenesController.busqueda);
        this.router.get('/:id', trenesController_1.trenesController.get);
        this.router.post('/', trenesController_1.trenesController.create);
        this.router.put('/:id', trenesController_1.trenesController.update);
        this.router.delete('/:id', trenesController_1.trenesController.delete);
    }
}
const trs = new trenesRoutes();
exports.default = trs.router;
