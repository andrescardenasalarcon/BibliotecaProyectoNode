"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDAO_Mostrar_1 = __importDefault(require("../../daos/Editorial/EditorialDAO_Mostrar"));
const editrorial_mostrar_sql_1 = require("../../repositorios/Editorial/editrorial_mostrar_sql");
class EditorialControlador_Mostrar extends EditorialDAO_Mostrar_1.default {
    mostrarLasEditoriales(req, res) {
        EditorialControlador_Mostrar.obtenerEditorial(editrorial_mostrar_sql_1.SQL_EDITORIAL_MOSTRAR.TODO, [], res);
    }
}
const editorialControlador_Mostrar = new EditorialControlador_Mostrar;
exports.default = editorialControlador_Mostrar;
