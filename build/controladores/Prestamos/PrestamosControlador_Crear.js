"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamoDAO_Crear_1 = __importDefault(require("../../daos/Prestamos/PrestamoDAO_Crear"));
const prestamo_crear_sql_1 = require("../../repositorios/Prestamos/prestamo_crear_sql");
class PrestamosControlador_Crear extends PrestamoDAO_Crear_1.default {
    grabarPrestamo(req, res) {
        const idCliente = req.body.id_cliente;
        const fechaInicio = req.body.fecha_inicio;
        const descripcion = req.body.descripcion;
        const parametro = [idCliente, fechaInicio, descripcion];
        PrestamosControlador_Crear.crearPrestamo(prestamo_crear_sql_1.SQL_PRESTAMO_CREAR.CONFIRMAR, prestamo_crear_sql_1.SQL_PRESTAMO_CREAR.CREAR, parametro, res);
        console.log(parametro);
    }
}
const prestamosControlador_Crear = new PrestamosControlador_Crear;
exports.default = prestamosControlador_Crear;
