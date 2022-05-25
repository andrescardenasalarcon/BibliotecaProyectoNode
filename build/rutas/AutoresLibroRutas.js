"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutorLibroControlador_Crear_ts_1 = __importDefault(require("../controladores/Autores_Libro/AutorLibroControlador_Crear.ts"));
const AutorLibroControlador_Actualizar_1 = __importDefault(require("../controladores/Autores_Libro/AutorLibroControlador_Actualizar"));
const AutorLibroControlador_Borrar_1 = __importDefault(require("../controladores/Autores_Libro/AutorLibroControlador_Borrar"));
const AutorLibroControlador_Mostrar_1 = __importDefault(require("../controladores/Autores_Libro/AutorLibroControlador_Mostrar"));
const AutorLibroControlador_Buscar_1 = __importDefault(require("../controladores/Autores_Libro/AutorLibroControlador_Buscar"));
class AutoresLibroRutas {
    constructor() {
        this.rutaAutoresLibroApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaAutoresLibroApi.get('/listar', AutorLibroControlador_Mostrar_1.default.mostrarLosAutoresLibro);
        this.rutaAutoresLibroApi.get('/listar/:elCodigo', AutorLibroControlador_Buscar_1.default.buscarAutorLibro);
        this.rutaAutoresLibroApi.post('/crearAutoresLibro', AutorLibroControlador_Crear_ts_1.default.grabarAutorLibro);
        this.rutaAutoresLibroApi.put('/editarAutoresLibro', AutorLibroControlador_Actualizar_1.default.actualizarAutorLibro);
        this.rutaAutoresLibroApi.delete('/:elCodigo', AutorLibroControlador_Borrar_1.default.borrarAutorLibro);
    }
}
const autoresLibroRutas = new AutoresLibroRutas();
exports.default = autoresLibroRutas.rutaAutoresLibroApi;
