"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamoDAO_Actualizar_1 = __importDefault(require("../../daos/Prestamos/PrestamoDAO_Actualizar"));
const prestamo_actualizar_sql_1 = require("../../repositorios/Prestamos/prestamo_actualizar_sql");
class PrestamosControlador_Actualizar extends PrestamoDAO_Actualizar_1.default {
    actualizarPrestamo(req, res) {
        const codigo = req.body.id_prestamo;
        const idCliente = req.body.id_cliente;
        const fechaInicio = req.body.fecha_inicio;
        const descripcion = req.body.descripcion;
        const parametro = [codigo, idCliente, fechaInicio, descripcion];
        PrestamosControlador_Actualizar.actualizarPrestamo(prestamo_actualizar_sql_1.SQL_PRESTAMO_ACTUALZIAR.ACTUALIZAR, parametro, res);
    }
}
const prestamosControlador_Actualizar = new PrestamosControlador_Actualizar;
exports.default = prestamosControlador_Actualizar;
