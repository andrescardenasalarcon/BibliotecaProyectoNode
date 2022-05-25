import { Request, Response } from "express";
import EditorialDAO_Borrar from "../../daos/Editorial/EditorialDAO_Borrar";
import { SQL_EDITORIAL_BORRAR } from "../../repositorios/Editorial/editorial_borrar_sql";

class EditorialControlador_Borrar extends EditorialDAO_Borrar{
    public borrarEditorial(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        EditorialControlador_Borrar.eliminarPorId(SQL_EDITORIAL_BORRAR.BORRAR,parametro,res);
    }
}
const editorialControlador_Borrar = new EditorialControlador_Borrar;
export default editorialControlador_Borrar;