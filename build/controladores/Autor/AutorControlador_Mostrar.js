"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDAO_Mostrar_1 = __importDefault(require("../../daos/Autor/AutorDAO_Mostrar"));
const autor_mostrar_sql_1 = require("../../repositorios/Autor/autor_mostrar_sql");
class AutorControlador_Mostrar extends AutorDAO_Mostrar_1.default {
    mostrarLosAutores(req, res) {
        AutorControlador_Mostrar.obtenerAutor(autor_mostrar_sql_1.SQL_AUTOR_MOSTRAR.TODO, [], res);
    }
}
const autorControlador_Mostrar = new AutorControlador_Mostrar;
exports.default = autorControlador_Mostrar;
