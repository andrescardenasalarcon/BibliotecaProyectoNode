"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDAO_Mostar_1 = __importDefault(require("../../daos/Cliente/ClienteDAO_Mostar"));
const cliente_mostrar_sql_1 = require("../../repositorios/Cliente/cliente_mostrar_sql");
class ClienteControlador_Mostrar extends ClienteDAO_Mostar_1.default {
    mostrarLosClientes(req, res) {
        ClienteControlador_Mostrar.obtenerClientes(cliente_mostrar_sql_1.SQL_CLIENTE_MOSTRAR.TODO, [], res);
    }
}
const clienteControlador_Mostrar = new ClienteControlador_Mostrar;
exports.default = clienteControlador_Mostrar;
