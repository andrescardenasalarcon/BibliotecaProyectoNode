import { Request,Response } from "express";
import DetallePrestamoDAO_Crear from "../../daos/Detalle_Prestmos/DetallePrestamoDAO_Crear";
import { SQL_DETALLE_PRESTAMO_CREAR } from "../../repositorios/Detalle_Prestamos/detallePrestamo_crear_cql";

class DetallePrestamoControlador_Crear extends DetallePrestamoDAO_Crear{

    public grabarDetallePrestamo(req: Request, res: Response): void {
        const idPrestamo = req.body.id_prestamo;
        const idLibro = req.body.id_libro;
        const fechaDevolucion = req.body.fecha_devolucion;
        const diasMora = req.body.dias_mora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fecha_entrega;
        const parametro = [idPrestamo,idLibro,fechaDevolucion,diasMora,descripcion,fechaEntrega];
        DetallePrestamoControlador_Crear.crearDetallePrestamo(SQL_DETALLE_PRESTAMO_CREAR.CONFIRMAR,SQL_DETALLE_PRESTAMO_CREAR.CREAR, parametro, res);

    }
}
const detallePrestamoControlador_Crear = new DetallePrestamoControlador_Crear;
export default detallePrestamoControlador_Crear;