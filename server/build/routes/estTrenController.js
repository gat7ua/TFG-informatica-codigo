"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estTrenController_1 = require("../controllers/estTrenController");
class estTrenRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', estTrenController_1.estTrenController.list);
        this.router.get('/:id', estTrenController_1.estTrenController.get);
        this.router.post('/', estTrenController_1.estTrenController.create);
        this.router.put('/:id', estTrenController_1.estTrenController.update);
        this.router.delete('/:id', estTrenController_1.estTrenController.delete);
    }
}
const etr = new estTrenRoutes();
exports.default = etr.router;
