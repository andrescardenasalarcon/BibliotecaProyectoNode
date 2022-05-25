"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDAO_Buscar_1 = __importDefault(require("../../daos/Autor/AutorDAO_Buscar"));
const autor_buscar_sql_1 = require("../../repositorios/Autor/autor_buscar_sql");
class AutorControlador_Buscar extends AutorDAO_Buscar_1.default {
    buscarAutor(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        AutorControlador_Buscar.encontrarAutorPorId(autor_buscar_sql_1.SQL_AUTOR_BUSCAR.BUSCAR, parametro, res);
    }
}
const autorControlador_Buscar = new AutorControlador_Buscar;
exports.default = autorControlador_Buscar;
