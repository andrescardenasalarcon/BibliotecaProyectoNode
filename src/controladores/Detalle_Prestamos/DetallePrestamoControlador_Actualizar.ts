import { Request, Response } from "express";
import DetallePrestamosDAO_Actualizar from "../../daos/Detalle_Prestmos/DetallePrestamosDAO_Actualizar";
import { SQL_DETALLE_PRESTAMO_ACTUALIZAR } from "../../repositorios/Detalle_Prestamos/detallePrestamo_actualizar_sql";

class DetallePrestamoControlador_Actualizar extends DetallePrestamosDAO_Actualizar{
    public actualizarDetallePrestamo(req: Request, res: Response): void {
        const codigo = req.body.id_detalle_prestamos;
        const idPrestamo = req.body.id_prestamo;
        const idLibro = req.body.id_libro;
        const fechaDevolucion = req.body.fecha_devolucion;
        const diasMora = req.body.dias_mora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fecha_entrega;
        const parametro = [codigo,idPrestamo,idLibro,fechaDevolucion,diasMora,descripcion,fechaEntrega];
        DetallePrestamoControlador_Actualizar.actualizarDetallePrestamo(SQL_DETALLE_PRESTAMO_ACTUALIZAR.ACTUALIZAR,parametro, res);
    }

}
const detallePrestamoControlador_Actualizar = new DetallePrestamoControlador_Actualizar;
export default detallePrestamoControlador_Actualizar;