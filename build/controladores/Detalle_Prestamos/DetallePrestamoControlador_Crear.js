"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamoDAO_Crear_1 = __importDefault(require("../../daos/Detalle_Prestmos/DetallePrestamoDAO_Crear"));
const detallePrestamo_crear_cql_1 = require("../../repositorios/Detalle_Prestamos/detallePrestamo_crear_cql");
class DetallePrestamoControlador_Crear extends DetallePrestamoDAO_Crear_1.default {
    grabarDetallePrestamo(req, res) {
        const idPrestamo = req.body.id_prestamo;
        const idLibro = req.body.id_libro;
        const fechaDevolucion = req.body.fecha_devolucion;
        const diasMora = req.body.dias_mora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fecha_entrega;
        const parametro = [idPrestamo, idLibro, fechaDevolucion, diasMora, descripcion, fechaEntrega];
        DetallePrestamoControlador_Crear.crearDetallePrestamo(detallePrestamo_crear_cql_1.SQL_DETALLE_PRESTAMO_CREAR.CONFIRMAR, detallePrestamo_crear_cql_1.SQL_DETALLE_PRESTAMO_CREAR.CREAR, parametro, res);
    }
}
const detallePrestamoControlador_Crear = new DetallePrestamoControlador_Crear;
exports.default = detallePrestamoControlador_Crear;
