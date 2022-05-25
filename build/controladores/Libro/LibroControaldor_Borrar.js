"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDAO_Borrar_1 = __importDefault(require("../../daos/Libro/LibroDAO_Borrar"));
const libro_borrar_sql_1 = require("../../repositorios/Libro/libro_borrar_sql");
class LibroControlador_Borrar extends LibroDAO_Borrar_1.default {
    borrarLibro(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        LibroControlador_Borrar.eliminarPorId(libro_borrar_sql_1.SQL_LIBRO_BORRAR.BORRAR, parametro, res);
    }
}
const libroControlador_Borrar = new LibroControlador_Borrar;
exports.default = libroControlador_Borrar;
