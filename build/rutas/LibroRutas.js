"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LibroControlador_Actualizar_1 = __importDefault(require("../controladores/Libro/LibroControlador_Actualizar"));
const LibroControlador_Buscar_1 = __importDefault(require("../controladores/Libro/LibroControlador_Buscar"));
const LibroControlador_Crear_1 = __importDefault(require("../controladores/Libro/LibroControlador_Crear"));
const LibroControlador_Mostrar_1 = __importDefault(require("../controladores/Libro/LibroControlador_Mostrar"));
const LibroControaldor_Borrar_1 = __importDefault(require("../controladores/Libro/LibroControaldor_Borrar"));
class LibroRutas {
    constructor() {
        this.rutaLibroApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaLibroApi.get('/listar', LibroControlador_Mostrar_1.default.mostrarLosLibros);
        this.rutaLibroApi.get('/listar/:elCodigo', LibroControlador_Buscar_1.default.buscarLibro);
        this.rutaLibroApi.post('/crearLibro', LibroControlador_Crear_1.default.grabarLibro);
        this.rutaLibroApi.put('/editarLibro', LibroControlador_Actualizar_1.default.actualizarLibro);
        this.rutaLibroApi.delete('/:elCodigo', LibroControaldor_Borrar_1.default.borrarLibro);
    }
}
const libroRutas = new LibroRutas();
exports.default = libroRutas.rutaLibroApi;
