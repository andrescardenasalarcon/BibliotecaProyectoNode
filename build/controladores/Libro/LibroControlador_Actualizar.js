"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDAO_Actualizar_1 = __importDefault(require("../../daos/Libro/LibroDAO_Actualizar"));
const libro_actualizar_sql_1 = require("../../repositorios/Libro/libro_actualizar_sql");
class LibroControlador_Actualizar extends LibroDAO_Actualizar_1.default {
    actualizarLibro(req, res) {
        const idcodigo = req.body.id_libro;
        const titulo = req.body.titulo;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const fechaPublicacion = req.body.fecha_publicacion;
        const idEditorial = req.body.id_editorial;
        const parametro = [idcodigo, titulo, codigo, isbn, fechaPublicacion, idEditorial];
        LibroControlador_Actualizar.actualizarLibro(libro_actualizar_sql_1.SQL_LIBRO_ACTUZALIR.ACTUALIZAR, parametro, res);
    }
}
const libroControlador_Actualizar = new LibroControlador_Actualizar;
exports.default = libroControlador_Actualizar;
