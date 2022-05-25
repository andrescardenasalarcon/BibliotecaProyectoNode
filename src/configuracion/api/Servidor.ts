import cors from "cors";
import express from "express";
import morgan from "morgan";
import autorRutas from "../../rutas/AutorRutas";
import autoresLibroRutas from "../../rutas/AutoresLibroRutas";
import clienteRutas from "../../rutas/ClienteRutas";
import detallePrestamosRutas from "../../rutas/DetallePrestamosRutas";
import editorialRutas from "../../rutas/EditorialRutas";
import libroRutas from "../../rutas/LibroRutas";
import prestamoRutas from "../../rutas/PrestamoRutas";
import consultasRutas from "../../rutas/ConsultasRutas";


class Servidor{
    public app: express.Application;
    constructor() {
        this.app = express();
        this.iniciarConfiguracion();
        this.activarRutas();

    }

    public iniciarConfiguracion(): void {
        this.app.set('PORT', 8080);
        this.app.use(cors());//Limitar quien entra
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ extended: true })); //Para peticiones en rutas de todo tipo
    }
    public activarRutas(): void {
        this.app.use('/api/autor',autorRutas);
        this.app.use('/api/autoresLibro',autoresLibroRutas);
        this.app.use('/api/cliente',clienteRutas);
        this.app.use('/api/detallePrestamos',detallePrestamosRutas);
        this.app.use('/api/editorial',editorialRutas);
        this.app.use('/api/libro',libroRutas);
        this.app.use('/api/prestamo',prestamoRutas);
        this.app.use('/api/consultas',consultasRutas);
    }

    public iniciar(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVE !!!',
                this.app.get('PORT'));
        });
    }
}
export default Servidor;