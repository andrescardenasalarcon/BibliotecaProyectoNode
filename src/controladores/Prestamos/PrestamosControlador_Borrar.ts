import { Request, Response } from "express";
import PrestamoDAO_Borrar from "../../daos/Prestamos/PrestamoDAO_Borrar";
import { SQL_PRESTAMO_BORRAR } from "../../repositorios/Prestamos/prestamo_borrar_sql";

class PrestamosControlador_Borrar extends PrestamoDAO_Borrar{
    public borrarPrestamo(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        PrestamosControlador_Borrar.eliminarPorId(SQL_PRESTAMO_BORRAR.BORRAR,parametro,res);
    }

}
const prestamosControlador_Borrar = new PrestamosControlador_Borrar;
export default prestamosControlador_Borrar;