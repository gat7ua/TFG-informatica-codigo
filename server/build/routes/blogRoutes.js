"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = require("../controllers/blogController");
class blogRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', blogController_1.blogController.list);
        this.router.get('/:id', blogController_1.blogController.get);
        this.router.post('/', blogController_1.blogController.create);
        this.router.put('/:id', blogController_1.blogController.update);
        this.router.delete('/:id', blogController_1.blogController.delete);
        this.router.get('/:id/comm', blogController_1.blogController.listC);
        this.router.get('/comm/g', blogController_1.blogController.listAC);
        this.router.post('/:id/comm', blogController_1.blogController.postC);
        this.router.put('/:id/comm/:idc', blogController_1.blogController.putC);
        this.router.delete('/:id/comm/:idc', blogController_1.blogController.deleteC);
    }
}
const bbr = new blogRoutes();
exports.default = bbr.router;
