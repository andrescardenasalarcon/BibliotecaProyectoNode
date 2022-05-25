"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDAO_Actualizar_1 = __importDefault(require("../../daos/Autor/AutorDAO_Actualizar"));
const autor_actualizar_sql_1 = require("../../repositorios/Autor/autor_actualizar_sql");
class AutorControlador_Actualizar extends AutorDAO_Actualizar_1.default {
    actualizarAutor(req, res) {
        const codigo = req.body.id_autor;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const nacionalidad = req.body.nacionalidad;
        const descripcion = req.body.descripcion;
        const parametro = [codigo, nombre, apellido, nacionalidad, descripcion];
        AutorControlador_Actualizar.actualizarAutor(autor_actualizar_sql_1.SQL_AUTOR_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const autorControlador_Actualizar = new AutorControlador_Actualizar;
exports.default = autorControlador_Actualizar;
