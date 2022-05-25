"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDAO_Crear_1 = __importDefault(require("../../daos/Libro/LibroDAO_Crear"));
const libro_crear_sql_1 = require("../../repositorios/Libro/libro_crear_sql");
class LibroControlador_Crear extends LibroDAO_Crear_1.default {
    grabarLibro(req, res) {
        const titulo = req.body.titulo;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const fechaPublicacion = req.body.fecha_publicacion;
        const idEditorial = req.body.id_editorial;
        const parametro = [titulo, codigo, isbn, fechaPublicacion, idEditorial];
        LibroControlador_Crear.crearLibro(libro_crear_sql_1.SQL_LIBRO_CREAR.CONFIRMAR, libro_crear_sql_1.SQL_LIBRO_CREAR.CREAR, parametro, res);
    }
}
const libroControlador_Crear = new LibroControlador_Crear;
exports.default = libroControlador_Crear;
