import { Request, Response } from "express";
import AutorDAO_Borrar from "../../daos/Autor/AutorDAO_Borrar";
import { SQL_AUTOR_BORRAR } from "../../repositorios/Autor/autor_borrar_sql";

class AutorControlador_Borrar extends AutorDAO_Borrar{

    public borrarAutor(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        AutorControlador_Borrar.eliminarPorId(SQL_AUTOR_BORRAR.BORRAR,parametro,res);
    }
}
const autorControlador_Borrar = new AutorControlador_Borrar;
export default autorControlador_Borrar;