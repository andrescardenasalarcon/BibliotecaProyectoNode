"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorLibroDAO_Actualizar_1 = __importDefault(require("../../daos/Autores_Libro/AutorLibroDAO_Actualizar"));
const autorLibro_actualizar_sql_1 = require("../../repositorios/Autores_Libro/autorLibro_actualizar_sql");
class AutorLibroControlador_Actualizar extends AutorLibroDAO_Actualizar_1.default {
    actualizarAutorLibro(req, res) {
        const codigo = req.body.id_autores_libro;
        const idAutor = req.body.id_autor;
        const idLibro = req.body.id_libro;
        const parametro = [codigo, idAutor, idLibro];
        AutorLibroControlador_Actualizar.actualizarAutorLibro(autorLibro_actualizar_sql_1.SQL_AUTOR_LIBRO_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const autorLibroControlador_Actualizar = new AutorLibroControlador_Actualizar;
exports.default = autorLibroControlador_Actualizar;
