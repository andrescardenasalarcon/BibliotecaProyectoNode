"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDAO_Borrar_1 = __importDefault(require("../../daos/Autor/AutorDAO_Borrar"));
const autor_borrar_sql_1 = require("../../repositorios/Autor/autor_borrar_sql");
class AutorControlador_Borrar extends AutorDAO_Borrar_1.default {
    borrarAutor(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        AutorControlador_Borrar.eliminarPorId(autor_borrar_sql_1.SQL_AUTOR_BORRAR.BORRAR, parametro, res);
    }
}
const autorControlador_Borrar = new AutorControlador_Borrar;
exports.default = autorControlador_Borrar;
