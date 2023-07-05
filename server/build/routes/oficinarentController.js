"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const oficinarentController_1 = require("../controllers/oficinarentController");
class oficinaRentRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', oficinarentController_1.oficinaRentController.list);
        this.router.get('/:id', oficinarentController_1.oficinaRentController.get);
        this.router.post('/', oficinarentController_1.oficinaRentController.create);
        this.router.put('/:id', oficinarentController_1.oficinaRentController.update);
        this.router.delete('/:id', oficinarentController_1.oficinaRentController.delete);
    }
}
const ofr = new oficinaRentRoutes();
exports.default = ofr.router;
