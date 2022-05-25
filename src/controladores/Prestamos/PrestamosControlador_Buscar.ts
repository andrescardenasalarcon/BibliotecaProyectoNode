import { Request,Response } from "express";
import PrestamoDAO_Buscar from "../../daos/Prestamos/PrestamoDAO_Buscar";
import { SQL_PRESTAMOS_BUSCAR } from "../../repositorios/Prestamos/prestamo_buscar_sql";

class PrestamosControlador_Buscar extends PrestamoDAO_Buscar{
    public buscarPrestamos(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        PrestamosControlador_Buscar.encontrarPrestamoPorId(SQL_PRESTAMOS_BUSCAR.BUSCAR,parametro,res);
    }

}
const prestamosControlador_Buscar = new PrestamosControlador_Buscar;
export default prestamosControlador_Buscar;