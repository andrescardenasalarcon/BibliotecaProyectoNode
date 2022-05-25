"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorLibroDAO_Borrar_1 = __importDefault(require("../../daos/Autores_Libro/AutorLibroDAO_Borrar"));
const autorLibro_borrar_sql_1 = require("../../repositorios/Autores_Libro/autorLibro_borrar_sql");
class AutorLibroControlador_Borrar extends AutorLibroDAO_Borrar_1.default {
    borrarAutorLibro(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        AutorLibroControlador_Borrar.eliminarPorId(autorLibro_borrar_sql_1.SQL_AUTOR_LIBRO_BORRAR.BORRAR, parametro, res);
    }
}
const autorLibroControlador_Borrar = new AutorLibroControlador_Borrar;
exports.default = autorLibroControlador_Borrar;
