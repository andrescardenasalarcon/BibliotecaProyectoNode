"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const AutorRutas_1 = __importDefault(require("../../rutas/AutorRutas"));
const AutoresLibroRutas_1 = __importDefault(require("../../rutas/AutoresLibroRutas"));
const ClienteRutas_1 = __importDefault(require("../../rutas/ClienteRutas"));
const DetallePrestamosRutas_1 = __importDefault(require("../../rutas/DetallePrestamosRutas"));
const EditorialRutas_1 = __importDefault(require("../../rutas/EditorialRutas"));
const LibroRutas_1 = __importDefault(require("../../rutas/LibroRutas"));
const PrestamoRutas_1 = __importDefault(require("../../rutas/PrestamoRutas"));
const ConsultasRutas_1 = __importDefault(require("../../rutas/ConsultasRutas"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set('PORT', 8080);
        this.app.use((0, cors_1.default)()); //Limitar quien entra
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true })); //Para peticiones en rutas de todo tipo
    }
    activarRutas() {
        this.app.use('/api/autor', AutorRutas_1.default);
        this.app.use('/api/autoresLibro', AutoresLibroRutas_1.default);
        this.app.use('/api/cliente', ClienteRutas_1.default);
        this.app.use('/api/detallePrestamos', DetallePrestamosRutas_1.default);
        this.app.use('/api/editorial', EditorialRutas_1.default);
        this.app.use('/api/libro', LibroRutas_1.default);
        this.app.use('/api/prestamo', PrestamoRutas_1.default);
        this.app.use('/api/consultas', ConsultasRutas_1.default);
    }
    iniciar() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVE !!!', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
