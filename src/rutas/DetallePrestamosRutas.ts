import { Router } from "express";
import detallePrestamoControlador_Actualizar from "../controladores/Detalle_Prestamos/DetallePrestamoControlador_Actualizar";
import detallePrestamoControlador_Borrar from "../controladores/Detalle_Prestamos/DetallePrestamoControlador_Borrar";
import detallePrestamoControlador_Buscar from "../controladores/Detalle_Prestamos/DetallePrestamoControlador_Buscar";
import detallePrestamoControlador_Crear from "../controladores/Detalle_Prestamos/DetallePrestamoControlador_Crear";
import detallePrestamoControlador_Mostrar from "../controladores/Detalle_Prestamos/DetallePrestamoControlador_Mostrar";

class DetallePrestamosRutas{
    public rutaDetallePrestamosApi: Router;
    constructor(){
        this.rutaDetallePrestamosApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaDetallePrestamosApi.get('/listar',detallePrestamoControlador_Mostrar.mostrarLosDetallesPrestamos);
        this.rutaDetallePrestamosApi.get('/listar/:elCodigo',detallePrestamoControlador_Buscar.buscarDetallePrestamo);
        this.rutaDetallePrestamosApi.post('/crearDetallePrestamos',detallePrestamoControlador_Crear.grabarDetallePrestamo);
        this.rutaDetallePrestamosApi.put('/editarDetallePrestamos',detallePrestamoControlador_Actualizar.actualizarDetallePrestamo);
        this.rutaDetallePrestamosApi.delete('/:elCodigo',detallePrestamoControlador_Borrar.borrarDetallePrestamo);
    }
}
const detallePrestamosRutas = new DetallePrestamosRutas();
export default detallePrestamosRutas.rutaDetallePrestamosApi;