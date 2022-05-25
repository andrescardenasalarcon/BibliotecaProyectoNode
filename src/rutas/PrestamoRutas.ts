import { Router } from "express";
import prestamosControlador_Actualizar from "../controladores/Prestamos/PrestamosControlador_Actualizar";
import prestamosControlador_Buscar from "../controladores/Prestamos/PrestamosControlador_Buscar";
import prestamosControlador_Borrar from "../controladores/Prestamos/PrestamosControlador_Borrar";
import prestamosControlador_Crear from "../controladores/Prestamos/PrestamosControlador_Crear";
import prestamosControlador_Mostrar from "../controladores/Prestamos/PrestamosControlador_Mostrar";

class PrestamoRutas{
    public rutaPrestamoApi: Router;
    constructor(){
        this.rutaPrestamoApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaPrestamoApi.get('/listar',prestamosControlador_Mostrar.mostrarLosPrestamos);
        this.rutaPrestamoApi.get('/listar/:elCodigo',prestamosControlador_Buscar.buscarPrestamos);
        this.rutaPrestamoApi.post('/crearPrestamo',prestamosControlador_Crear.grabarPrestamo);
        this.rutaPrestamoApi.put('/editarPrestamo',prestamosControlador_Actualizar.actualizarPrestamo);
        this.rutaPrestamoApi.delete('/:elCodigo',prestamosControlador_Borrar.borrarPrestamo);
    }
}
const prestamoRutas = new PrestamoRutas();
export default prestamoRutas.rutaPrestamoApi;