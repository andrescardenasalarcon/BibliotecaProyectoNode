"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamoDAO_Mostrar_1 = __importDefault(require("../../daos/Detalle_Prestmos/DetallePrestamoDAO_Mostrar"));
const detallePrestamos_mostrar_sql_1 = require("../../repositorios/Detalle_Prestamos/detallePrestamos_mostrar_sql");
class DetallePrestamoControlador_Mostrar extends DetallePrestamoDAO_Mostrar_1.default {
    mostrarLosDetallesPrestamos(req, res) {
        DetallePrestamoControlador_Mostrar.obtenerDetallePrestamo(detallePrestamos_mostrar_sql_1.SQL_DETALLE_PRESTAMOS_MOSTRAR.TODO, [], res);
    }
}
const detallePrestamoControlador_Mostrar = new DetallePrestamoControlador_Mostrar;
exports.default = detallePrestamoControlador_Mostrar;
