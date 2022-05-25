import { Request, Response } from "express";
import AutroLibroDAO_Borrar from "../../daos/Autores_Libro/AutorLibroDAO_Borrar";
import { SQL_AUTOR_LIBRO_BORRAR } from "../../repositorios/Autores_Libro/autorLibro_borrar_sql";

class AutorLibroControlador_Borrar extends AutroLibroDAO_Borrar{
    public borrarAutorLibro(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        AutorLibroControlador_Borrar.eliminarPorId(SQL_AUTOR_LIBRO_BORRAR.BORRAR,parametro,res);
    }

}
const autorLibroControlador_Borrar = new AutorLibroControlador_Borrar;
export default autorLibroControlador_Borrar;