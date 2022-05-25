"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDAO_Mostrar_1 = __importDefault(require("../../daos/Libro/LibroDAO_Mostrar"));
const libro_mostrar_sql_1 = require("../../repositorios/Libro/libro_mostrar_sql");
class LibroControlador_Mostrar extends LibroDAO_Mostrar_1.default {
    mostrarLosLibros(req, res) {
        LibroControlador_Mostrar.obtenerLibro(libro_mostrar_sql_1.SQL_LIBRO_MOSTRAR.TODO, [], res);
    }
}
const libroControlador_Mostrar = new LibroControlador_Mostrar;
exports.default = libroControlador_Mostrar;
