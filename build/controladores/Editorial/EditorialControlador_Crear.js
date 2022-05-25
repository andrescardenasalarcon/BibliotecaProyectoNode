"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDAO_Crear_1 = __importDefault(require("../../daos/Editorial/EditorialDAO_Crear"));
const editorial_crear_sql_1 = require("../../repositorios/Editorial/editorial_crear_sql");
class EditorialControlador_Crear extends EditorialDAO_Crear_1.default {
    grabarEditorial(req, res) {
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametro = [nombre, pais, telefono];
        EditorialControlador_Crear.crearEditorial(editorial_crear_sql_1.SQL_EDIOTRIAL_CREAR.CONFIRMAR, editorial_crear_sql_1.SQL_EDIOTRIAL_CREAR.CREAR, parametro, res);
    }
}
const editorialControlador_Crear = new EditorialControlador_Crear;
exports.default = editorialControlador_Crear;
