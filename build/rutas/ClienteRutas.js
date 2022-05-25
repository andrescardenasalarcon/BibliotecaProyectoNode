"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClienteControlador_Actualizar_1 = __importDefault(require("../controladores/Cliente/ClienteControlador_Actualizar"));
const ClienteControlador_Borrar_1 = __importDefault(require("../controladores/Cliente/ClienteControlador_Borrar"));
const ClienteControlador_Buscar_1 = __importDefault(require("../controladores/Cliente/ClienteControlador_Buscar"));
const ClienteControlador_Crear_1 = __importDefault(require("../controladores/Cliente/ClienteControlador_Crear"));
const ClienteControlador_Mostrar_1 = __importDefault(require("../controladores/Cliente/ClienteControlador_Mostrar"));
class ClienteRutas {
    constructor() {
        this.rutaClienteApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaClienteApi.get('/listar', ClienteControlador_Mostrar_1.default.mostrarLosClientes);
        this.rutaClienteApi.get('/listar/:elCodigo', ClienteControlador_Buscar_1.default.buscarCliente);
        this.rutaClienteApi.post('/crearCliente', ClienteControlador_Crear_1.default.grabarCliente);
        this.rutaClienteApi.put('/editarCliente', ClienteControlador_Actualizar_1.default.actualizarCliente);
        this.rutaClienteApi.delete('/:elCodigo', ClienteControlador_Borrar_1.default.borrarCliente);
    }
}
const detallePrestamosRutas = new ClienteRutas();
exports.default = detallePrestamosRutas.rutaClienteApi;
