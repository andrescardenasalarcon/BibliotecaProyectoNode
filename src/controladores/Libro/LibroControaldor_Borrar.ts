import { Request, Response } from "express";
import LibroDAO_Borrar from "../../daos/Libro/LibroDAO_Borrar";
import { SQL_LIBRO_BORRAR } from "../../repositorios/Libro/libro_borrar_sql";

class LibroControlador_Borrar extends LibroDAO_Borrar{

    public borrarLibro(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        LibroControlador_Borrar.eliminarPorId(SQL_LIBRO_BORRAR.BORRAR,parametro,res);
    }
}
const libroControlador_Borrar = new LibroControlador_Borrar;
export default libroControlador_Borrar;

