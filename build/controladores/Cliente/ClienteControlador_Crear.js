"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDAO_Crear_1 = __importDefault(require("../../daos/Cliente/ClienteDAO_Crear"));
const cliente_crear_sql_1 = require("../../repositorios/Cliente/cliente_crear_sql");
class ClienteControlador_Crear extends ClienteDAO_Crear_1.default {
    grabarCliente(req, res) {
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [identificacion, nombre, apellido, direccion, telefono];
        ClienteControlador_Crear.crearCliente(cliente_crear_sql_1.SQL_CLIENTE_CREAR.CONFIRMAR, cliente_crear_sql_1.SQL_CLIENTE_CREAR.CREAR, parametro, res);
    }
}
const clienteControlador_Crear = new ClienteControlador_Crear;
exports.default = clienteControlador_Crear;
