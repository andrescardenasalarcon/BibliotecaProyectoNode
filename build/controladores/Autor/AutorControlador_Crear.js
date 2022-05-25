"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDAO_Crear_1 = __importDefault(require("../../daos/Autor/AutorDAO_Crear"));
const autor_crear_sql_1 = require("../../repositorios/Autor/autor_crear_sql");
class AutorControlador_Crear extends AutorDAO_Crear_1.default {
    grabarAutor(req, res) {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const nacionalidad = req.body.nacionalidad;
        const descripcion = req.body.descripcion;
        const parametro = [nombre, apellido, nacionalidad, descripcion];
        AutorControlador_Crear.crearAutor(autor_crear_sql_1.SQL_AUTOR_CREAR.CONFIRMAR, autor_crear_sql_1.SQL_AUTOR_CREAR.CREAR, parametro, res);
    }
}
const autorControlador_Crear = new AutorControlador_Crear;
exports.default = autorControlador_Crear;
