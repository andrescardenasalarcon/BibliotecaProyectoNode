import { Request,Response } from "express";
import EditorialDAO_Buscar from "../../daos/Editorial/EditorialDAO_Buscar";
import { SQL_EDITORIAL_BUSCAR } from "../../repositorios/Editorial/editorial_buscar_sql";

class EditorialControlador_Buscar extends EditorialDAO_Buscar{
    public buscarAutor(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        EditorialControlador_Buscar.encontrarEditorialPorId(SQL_EDITORIAL_BUSCAR.BUSCAR,parametro,res);
    }

}
const editorialControlador_Buscar = new EditorialControlador_Buscar;
export default editorialControlador_Buscar;