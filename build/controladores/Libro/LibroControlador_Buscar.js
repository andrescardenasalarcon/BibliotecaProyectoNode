"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDAO_Buscar_1 = __importDefault(require("../../daos/Libro/LibroDAO_Buscar"));
const libro_buscar_sql_1 = require("../../repositorios/Libro/libro_buscar_sql");
class LibroControlador_Buscar extends LibroDAO_Buscar_1.default {
    buscarLibro(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        LibroControlador_Buscar.encontrarLibroPorId(libro_buscar_sql_1.SQL_LIBRO_BUSCAR.BUSCAR, parametro, res);
    }
}
const libroControlador_Buscar = new LibroControlador_Buscar;
exports.default = libroControlador_Buscar;
