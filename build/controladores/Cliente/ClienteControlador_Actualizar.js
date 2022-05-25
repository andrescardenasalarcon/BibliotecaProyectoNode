"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDAO_Actualizar_1 = __importDefault(require("../../daos/Cliente/ClienteDAO_Actualizar"));
const cliente_actualizar_sql_1 = require("../../repositorios/Cliente/cliente_actualizar_sql");
class ClienteControlador_Actualizar extends ClienteDAO_Actualizar_1.default {
    actualizarCliente(req, res) {
        const codigo = req.body.id_cliente;
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [codigo, identificacion, nombre, apellido, direccion, telefono];
        ClienteControlador_Actualizar.actualizarCliente(cliente_actualizar_sql_1.SQL_CLIENTE_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const clienteControlador_Actualizar = new ClienteControlador_Actualizar;
exports.default = clienteControlador_Actualizar;
