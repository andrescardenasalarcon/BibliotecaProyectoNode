"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConsultasDAO_Mostrar_1 = __importDefault(require("../../daos/Consultas/ConsultasDAO_Mostrar"));
const ConsultasNode_1 = require("../../repositorios/Consultas/ConsultasNode");
class ConsultasControlador extends ConsultasDAO_Mostrar_1.default {
    mostrarEditorialPorIdLibro(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ConsultasControlador.obtenerConsultas(ConsultasNode_1.SQL_CONSULTAS_NODE.ID_LIBRO_EDITORIAL, parametro, res);
    }
    mostrarClientePorIdPrestamo(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ConsultasControlador.obtenerConsultas(ConsultasNode_1.SQL_CONSULTAS_NODE.ID_PRESTAMO_CLIENTE, parametro, res);
    }
    mostrarLibroPorIdDetallePrestamo(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ConsultasControlador.obtenerConsultas(ConsultasNode_1.SQL_CONSULTAS_NODE.ID_DETALLEPRESTAMO_LIBRO, parametro, res);
    }
}
const consultasControlador = new ConsultasControlador;
exports.default = consultasControlador;
