"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DetallePrestamoControlador_Actualizar_1 = __importDefault(require("../controladores/Detalle_Prestamos/DetallePrestamoControlador_Actualizar"));
const DetallePrestamoControlador_Borrar_1 = __importDefault(require("../controladores/Detalle_Prestamos/DetallePrestamoControlador_Borrar"));
const DetallePrestamoControlador_Buscar_1 = __importDefault(require("../controladores/Detalle_Prestamos/DetallePrestamoControlador_Buscar"));
const DetallePrestamoControlador_Crear_1 = __importDefault(require("../controladores/Detalle_Prestamos/DetallePrestamoControlador_Crear"));
const DetallePrestamoControlador_Mostrar_1 = __importDefault(require("../controladores/Detalle_Prestamos/DetallePrestamoControlador_Mostrar"));
class DetallePrestamosRutas {
    constructor() {
        this.rutaDetallePrestamosApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaDetallePrestamosApi.get('/listar', DetallePrestamoControlador_Mostrar_1.default.mostrarLosDetallesPrestamos);
        this.rutaDetallePrestamosApi.get('/listar/:elCodigo', DetallePrestamoControlador_Buscar_1.default.buscarDetallePrestamo);
        this.rutaDetallePrestamosApi.post('/crearDetallePrestamos', DetallePrestamoControlador_Crear_1.default.grabarDetallePrestamo);
        this.rutaDetallePrestamosApi.put('/editarDetallePrestamos', DetallePrestamoControlador_Actualizar_1.default.actualizarDetallePrestamo);
        this.rutaDetallePrestamosApi.delete('/:elCodigo', DetallePrestamoControlador_Borrar_1.default.borrarDetallePrestamo);
    }
}
const detallePrestamosRutas = new DetallePrestamosRutas();
exports.default = detallePrestamosRutas.rutaDetallePrestamosApi;
