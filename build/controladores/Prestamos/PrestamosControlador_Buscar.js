"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamoDAO_Buscar_1 = __importDefault(require("../../daos/Prestamos/PrestamoDAO_Buscar"));
const prestamo_buscar_sql_1 = require("../../repositorios/Prestamos/prestamo_buscar_sql");
class PrestamosControlador_Buscar extends PrestamoDAO_Buscar_1.default {
    buscarPrestamos(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        PrestamosControlador_Buscar.encontrarPrestamoPorId(prestamo_buscar_sql_1.SQL_PRESTAMOS_BUSCAR.BUSCAR, parametro, res);
    }
}
const prestamosControlador_Buscar = new PrestamosControlador_Buscar;
exports.default = prestamosControlador_Buscar;
