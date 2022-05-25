"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDAO_Buscar_1 = __importDefault(require("../../daos/Editorial/EditorialDAO_Buscar"));
const editorial_buscar_sql_1 = require("../../repositorios/Editorial/editorial_buscar_sql");
class EditorialControlador_Buscar extends EditorialDAO_Buscar_1.default {
    buscarAutor(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        EditorialControlador_Buscar.encontrarEditorialPorId(editorial_buscar_sql_1.SQL_EDITORIAL_BUSCAR.BUSCAR, parametro, res);
    }
}
const editorialControlador_Buscar = new EditorialControlador_Buscar;
exports.default = editorialControlador_Buscar;
