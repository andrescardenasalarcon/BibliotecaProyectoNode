"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EditorialControlador_Actualizar_1 = __importDefault(require("../controladores/Editorial/EditorialControlador_Actualizar"));
const EditorialControlador_Borrar_1 = __importDefault(require("../controladores/Editorial/EditorialControlador_Borrar"));
const EditorialControlador_Buscar_1 = __importDefault(require("../controladores/Editorial/EditorialControlador_Buscar"));
const EditorialControlador_Crear_1 = __importDefault(require("../controladores/Editorial/EditorialControlador_Crear"));
const EditorialControlador_Mostrar_1 = __importDefault(require("../controladores/Editorial/EditorialControlador_Mostrar"));
class EditorialRutas {
    constructor() {
        this.rutaEditorialApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaEditorialApi.get('/listar', EditorialControlador_Mostrar_1.default.mostrarLasEditoriales);
        this.rutaEditorialApi.get('/listar/:elCodigo', EditorialControlador_Buscar_1.default.buscarAutor);
        this.rutaEditorialApi.post('/crearEditorial', EditorialControlador_Crear_1.default.grabarEditorial);
        this.rutaEditorialApi.put('/editarEditorial', EditorialControlador_Actualizar_1.default.actualizarEditorial);
        this.rutaEditorialApi.delete('/:elCodigo', EditorialControlador_Borrar_1.default.borrarEditorial);
    }
}
const editorialRutas = new EditorialRutas();
exports.default = editorialRutas.rutaEditorialApi;
