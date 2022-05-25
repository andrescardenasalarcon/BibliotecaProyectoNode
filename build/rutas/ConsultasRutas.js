"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultasControlador_Mostrar_1 = __importDefault(require("../controladores/ConsultasControlador.ts/ConsultasControlador_Mostrar"));
class ConsultasRutas {
    constructor() {
        this.rutaConsultaApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaConsultaApi.get('/idLibro/:elCodigo', ConsultasControlador_Mostrar_1.default.mostrarEditorialPorIdLibro);
        this.rutaConsultaApi.get('/idPrestamo/:elCodigo', ConsultasControlador_Mostrar_1.default.mostrarClientePorIdPrestamo);
        this.rutaConsultaApi.get('/idDetallePrestamo/:elCodigo', ConsultasControlador_Mostrar_1.default.mostrarLibroPorIdDetallePrestamo);
    }
}
const consultasRutas = new ConsultasRutas();
exports.default = consultasRutas.rutaConsultaApi;
