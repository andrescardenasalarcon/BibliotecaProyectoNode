"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDAO_Buscar_1 = __importDefault(require("../../daos/Cliente/ClienteDAO_Buscar"));
const cliente_buscar_Sql_1 = require("../../repositorios/Cliente/cliente_buscar_Sql");
class ClienteControlador_Buscar extends ClienteDAO_Buscar_1.default {
    buscarCliente(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ClienteControlador_Buscar.encontrarClientePorId(cliente_buscar_Sql_1.SQL_CLIENTE_BUSCAR.BUSCAR, parametro, res);
    }
}
const clienteControlador_Buscar = new ClienteControlador_Buscar;
exports.default = clienteControlador_Buscar;
