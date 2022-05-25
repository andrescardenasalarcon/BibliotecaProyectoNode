"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDAO_Actualizar_1 = __importDefault(require("../../daos/Editorial/EditorialDAO_Actualizar"));
const editorial_actualizar_sql_1 = require("../../repositorios/Editorial/editorial_actualizar_sql");
class EditorialControlador_Actualizar extends EditorialDAO_Actualizar_1.default {
    actualizarEditorial(req, res) {
        const codigo = req.body.id_editorial;
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametro = [codigo, nombre, pais, telefono];
        EditorialControlador_Actualizar.actualizarEditorial(editorial_actualizar_sql_1.SQL_EDITORIAL_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const editorialControlador_Actualizar = new EditorialControlador_Actualizar;
exports.default = editorialControlador_Actualizar;
