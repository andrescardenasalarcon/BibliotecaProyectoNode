"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDAO_Borrar_1 = __importDefault(require("../../daos/Cliente/ClienteDAO_Borrar"));
const cliente_borrar_sql_1 = require("../../repositorios/Cliente/cliente_borrar_sql");
class ClienteControlador_Borrar extends ClienteDAO_Borrar_1.default {
    borrarCliente(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ClienteControlador_Borrar.eliminarPorId(cliente_borrar_sql_1.SQL_CLIENTE_BORRAR.BORRAR, parametro, res);
    }
}
const clienteControlador_Borrar = new ClienteControlador_Borrar;
exports.default = clienteControlador_Borrar;
