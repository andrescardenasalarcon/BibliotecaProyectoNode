import { Request, Response } from "express";
import DetallePrestamoDAO_Borrar from "../../daos/Detalle_Prestmos/DetallePrestamoDAO_Borrar";
import { SQL_DETALLE_PRESTAMO_BORRAR } from "../../repositorios/Detalle_Prestamos/detallePrestamo_borrar_sql";

class DetallePrestamoControlador_Borrar extends DetallePrestamoDAO_Borrar{
    public borrarDetallePrestamo(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        DetallePrestamoControlador_Borrar.eliminarPorId(SQL_DETALLE_PRESTAMO_BORRAR.BORRAR,parametro,res);
    }

}
const detallePrestamoControlador_Borrar = new DetallePrestamoControlador_Borrar;
export default detallePrestamoControlador_Borrar;