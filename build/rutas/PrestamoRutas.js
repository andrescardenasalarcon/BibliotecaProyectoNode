"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PrestamosControlador_Actualizar_1 = __importDefault(require("../controladores/Prestamos/PrestamosControlador_Actualizar"));
const PrestamosControlador_Buscar_1 = __importDefault(require("../controladores/Prestamos/PrestamosControlador_Buscar"));
const PrestamosControlador_Borrar_1 = __importDefault(require("../controladores/Prestamos/PrestamosControlador_Borrar"));
const PrestamosControlador_Crear_1 = __importDefault(require("../controladores/Prestamos/PrestamosControlador_Crear"));
const PrestamosControlador_Mostrar_1 = __importDefault(require("../controladores/Prestamos/PrestamosControlador_Mostrar"));
class PrestamoRutas {
    constructor() {
        this.rutaPrestamoApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaPrestamoApi.get('/listar', PrestamosControlador_Mostrar_1.default.mostrarLosPrestamos);
        this.rutaPrestamoApi.get('/listar/:elCodigo', PrestamosControlador_Buscar_1.default.buscarPrestamos);
        this.rutaPrestamoApi.post('/crearPrestamo', PrestamosControlador_Crear_1.default.grabarPrestamo);
        this.rutaPrestamoApi.put('/editarPrestamo', PrestamosControlador_Actualizar_1.default.actualizarPrestamo);
        this.rutaPrestamoApi.delete('/:elCodigo', PrestamosControlador_Borrar_1.default.borrarPrestamo);
    }
}
const prestamoRutas = new PrestamoRutas();
exports.default = prestamoRutas.rutaPrestamoApi;
