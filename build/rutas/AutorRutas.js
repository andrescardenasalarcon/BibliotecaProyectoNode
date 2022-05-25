"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutorControlador_Actualizar_1 = __importDefault(require("../controladores/Autor/AutorControlador_Actualizar"));
const AutorControlador_Borrar_1 = __importDefault(require("../controladores/Autor/AutorControlador_Borrar"));
const AutorControlador_Buscar_1 = __importDefault(require("../controladores/Autor/AutorControlador_Buscar"));
const AutorControlador_Crear_1 = __importDefault(require("../controladores/Autor/AutorControlador_Crear"));
const AutorControlador_Mostrar_1 = __importDefault(require("../controladores/Autor/AutorControlador_Mostrar"));
class AutorRutas {
    constructor() {
        this.rutaAutorApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaAutorApi.get('/listar', AutorControlador_Mostrar_1.default.mostrarLosAutores);
        this.rutaAutorApi.get('/listar/:elCodigo', AutorControlador_Buscar_1.default.buscarAutor);
        this.rutaAutorApi.post('/crearAutor', AutorControlador_Crear_1.default.grabarAutor);
        this.rutaAutorApi.put('/editarAutor', AutorControlador_Actualizar_1.default.actualizarAutor);
        this.rutaAutorApi.delete('/:elCodigo', AutorControlador_Borrar_1.default.borrarAutor);
    }
}
const autorRutas = new AutorRutas();
exports.default = autorRutas.rutaAutorApi;
