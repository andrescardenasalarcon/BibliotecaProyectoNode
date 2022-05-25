"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamoDAO_Borrar_1 = __importDefault(require("../../daos/Detalle_Prestmos/DetallePrestamoDAO_Borrar"));
const detallePrestamo_borrar_sql_1 = require("../../repositorios/Detalle_Prestamos/detallePrestamo_borrar_sql");
class DetallePrestamoControlador_Borrar extends DetallePrestamoDAO_Borrar_1.default {
    borrarDetallePrestamo(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        DetallePrestamoControlador_Borrar.eliminarPorId(detallePrestamo_borrar_sql_1.SQL_DETALLE_PRESTAMO_BORRAR.BORRAR, parametro, res);
    }
}
const detallePrestamoControlador_Borrar = new DetallePrestamoControlador_Borrar;
exports.default = detallePrestamoControlador_Borrar;
