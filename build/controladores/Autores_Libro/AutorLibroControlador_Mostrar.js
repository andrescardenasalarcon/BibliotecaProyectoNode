"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorLibroDAO_Mostrar_1 = __importDefault(require("../../daos/Autores_Libro/AutorLibroDAO_Mostrar"));
const autorLibro_mostrar_sql_1 = require("../../repositorios/Autores_Libro/autorLibro_mostrar_sql");
class AutorLibroControlador_Mostrar extends AutorLibroDAO_Mostrar_1.default {
    mostrarLosAutoresLibro(req, res) {
        AutorLibroControlador_Mostrar.obtenerAutoresLibro(autorLibro_mostrar_sql_1.SQL_AUTOR_LIBRO_MOSTRAR.TODO, [], res);
    }
}
const autorLibroControlador_Mostrar = new AutorLibroControlador_Mostrar;
exports.default = autorLibroControlador_Mostrar;
