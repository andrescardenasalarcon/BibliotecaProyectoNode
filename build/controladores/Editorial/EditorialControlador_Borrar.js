"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDAO_Borrar_1 = __importDefault(require("../../daos/Editorial/EditorialDAO_Borrar"));
const editorial_borrar_sql_1 = require("../../repositorios/Editorial/editorial_borrar_sql");
class EditorialControlador_Borrar extends EditorialDAO_Borrar_1.default {
    borrarEditorial(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        EditorialControlador_Borrar.eliminarPorId(editorial_borrar_sql_1.SQL_EDITORIAL_BORRAR.BORRAR, parametro, res);
    }
}
const editorialControlador_Borrar = new EditorialControlador_Borrar;
exports.default = editorialControlador_Borrar;
