"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamosDAO_Actualizar_1 = __importDefault(require("../../daos/Detalle_Prestmos/DetallePrestamosDAO_Actualizar"));
const detallePrestamo_actualizar_sql_1 = require("../../repositorios/Detalle_Prestamos/detallePrestamo_actualizar_sql");
class DetallePrestamoControlador_Actualizar extends DetallePrestamosDAO_Actualizar_1.default {
    actualizarDetallePrestamo(req, res) {
        const codigo = req.body.id_detalle_prestamos;
        const idPrestamo = req.body.id_prestamo;
        const idLibro = req.body.id_libro;
        const fechaDevolucion = req.body.fecha_devolucion;
        const diasMora = req.body.dias_mora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fecha_entrega;
        const parametro = [codigo, idPrestamo, idLibro, fechaDevolucion, diasMora, descripcion, fechaEntrega];
        DetallePrestamoControlador_Actualizar.actualizarDetallePrestamo(detallePrestamo_actualizar_sql_1.SQL_DETALLE_PRESTAMO_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const detallePrestamoControlador_Actualizar = new DetallePrestamoControlador_Actualizar;
exports.default = detallePrestamoControlador_Actualizar;
