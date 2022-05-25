"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamoDAO_Borrar_1 = __importDefault(require("../../daos/Prestamos/PrestamoDAO_Borrar"));
const prestamo_borrar_sql_1 = require("../../repositorios/Prestamos/prestamo_borrar_sql");
class PrestamosControlador_Borrar extends PrestamoDAO_Borrar_1.default {
    borrarPrestamo(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        PrestamosControlador_Borrar.eliminarPorId(prestamo_borrar_sql_1.SQL_PRESTAMO_BORRAR.BORRAR, parametro, res);
    }
}
const prestamosControlador_Borrar = new PrestamosControlador_Borrar;
exports.default = prestamosControlador_Borrar;
