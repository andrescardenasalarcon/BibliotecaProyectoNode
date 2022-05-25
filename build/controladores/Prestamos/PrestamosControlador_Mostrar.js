"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamoDAO_Mostrar_1 = __importDefault(require("../../daos/Prestamos/PrestamoDAO_Mostrar"));
const prestamo_mostrar_sql_1 = require("../../repositorios/Prestamos/prestamo_mostrar_sql");
class PrestamosControlador_Mostrar extends PrestamoDAO_Mostrar_1.default {
    mostrarLosPrestamos(req, res) {
        PrestamosControlador_Mostrar.obtenerPrestamo(prestamo_mostrar_sql_1.SQL_PRESTAMO_MOSTRAR.TODO, [], res);
    }
}
const prestamosControlador_Mostrar = new PrestamosControlador_Mostrar;
exports.default = prestamosControlador_Mostrar;
