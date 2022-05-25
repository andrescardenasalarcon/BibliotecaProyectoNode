import { Request,Response } from "express";
import DetallePrestamoDAO_Buscar from "../../daos/Detalle_Prestmos/DetallePrestamoDAO_Buscar";
import { SQL_DETALLE_PRESTAMO_BUSCAR } from "../../repositorios/Detalle_Prestamos/detallePrestamo_buscar_sql";

class DetallePrestamoControlador_Buscar extends DetallePrestamoDAO_Buscar{

    public buscarDetallePrestamo(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        DetallePrestamoControlador_Buscar.encontrarDetallePrestamoPorId(SQL_DETALLE_PRESTAMO_BUSCAR.BUSCAR,parametro,res);
    }
}
const detallePrestamoControlador_Buscar = new DetallePrestamoControlador_Buscar;
export default detallePrestamoControlador_Buscar;