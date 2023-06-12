"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class usuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.usuarioController.list);
        this.router.get('/:email', usuarioController_1.usuarioController.get);
        this.router.get('/rol/:email', usuarioController_1.usuarioController.rol);
        this.router.post('/registrar', usuarioController_1.usuarioController.create);
        this.router.post('/token', usuarioController_1.usuarioController.gToken);
        this.router.post('/token/verif', usuarioController_1.usuarioController.verifToken);
        this.router.post('/login', usuarioController_1.usuarioController.logIn);
        this.router.put('/:id', usuarioController_1.usuarioController.update);
        this.router.delete('/:id', usuarioController_1.usuarioController.delete);
    }
}
const ur = new usuarioRoutes();
exports.default = ur.router;
