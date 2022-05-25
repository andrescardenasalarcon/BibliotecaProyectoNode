import { Request,Response } from "express";
import DetallePrestamoDAO_Mostar from "../../daos/Detalle_Prestmos/DetallePrestamoDAO_Mostrar";
import { SQL_DETALLE_PRESTAMOS_MOSTRAR } from "../../repositorios/Detalle_Prestamos/detallePrestamos_mostrar_sql";

class DetallePrestamoControlador_Mostrar extends DetallePrestamoDAO_Mostar{
    public mostrarLosDetallesPrestamos(req: Request, res: Response): void {
        DetallePrestamoControlador_Mostrar.obtenerDetallePrestamo(SQL_DETALLE_PRESTAMOS_MOSTRAR.TODO, [], res);
    }
}
const detallePrestamoControlador_Mostrar = new DetallePrestamoControlador_Mostrar;
export default detallePrestamoControlador_Mostrar;