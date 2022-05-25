"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorLibroDAO_Buscar_1 = __importDefault(require("../../daos/Autores_Libro/AutorLibroDAO_Buscar"));
const autorLibro_buscar_sql_1 = require("../../repositorios/Autores_Libro/autorLibro_buscar_sql");
class AutorLibroControlador_Buscar extends AutorLibroDAO_Buscar_1.default {
    buscarAutorLibro(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        AutorLibroControlador_Buscar.encontrarAutorLibroPorId(autorLibro_buscar_sql_1.SQL_AUTOR_LIBRO_BUSCAR.BUSCAR, parametro, res);
    }
}
const autorLibroControlador_Buscar = new AutorLibroControlador_Buscar;
exports.default = autorLibroControlador_Buscar;
