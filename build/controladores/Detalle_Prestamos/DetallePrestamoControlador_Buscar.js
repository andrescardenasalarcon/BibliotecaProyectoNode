"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamoDAO_Buscar_1 = __importDefault(require("../../daos/Detalle_Prestmos/DetallePrestamoDAO_Buscar"));
const detallePrestamo_buscar_sql_1 = require("../../repositorios/Detalle_Prestamos/detallePrestamo_buscar_sql");
class DetallePrestamoControlador_Buscar extends DetallePrestamoDAO_Buscar_1.default {
    buscarDetallePrestamo(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        DetallePrestamoControlador_Buscar.encontrarDetallePrestamoPorId(detallePrestamo_buscar_sql_1.SQL_DETALLE_PRESTAMO_BUSCAR.BUSCAR, parametro, res);
    }
}
const detallePrestamoControlador_Buscar = new DetallePrestamoControlador_Buscar;
exports.default = detallePrestamoControlador_Buscar;
