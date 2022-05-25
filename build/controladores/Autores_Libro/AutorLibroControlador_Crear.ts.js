"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorLibroDAO_Crear_1 = __importDefault(require("../../daos/Autores_Libro/AutorLibroDAO_Crear"));
const autorLibro_crear_sql_1 = require("../../repositorios/Autores_Libro/autorLibro_crear_sql");
class AutorLibroControlador_Crear extends AutorLibroDAO_Crear_1.default {
    grabarAutorLibro(req, res) {
        const idAutor = req.body.id_autor;
        const idLibro = req.body.id_libro;
        const parametro = [idAutor, idLibro];
        AutorLibroControlador_Crear.crearAutorLibro(autorLibro_crear_sql_1.SQL_AUTOR_LIBRO_CREAR.CONFIRMAR, autorLibro_crear_sql_1.SQL_AUTOR_LIBRO_CREAR.CREAR, parametro, res);
    }
}
const autorLibroControlador_Crear = new AutorLibroControlador_Crear;
exports.default = autorLibroControlador_Crear;
