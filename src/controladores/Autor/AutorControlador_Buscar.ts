import { Request,Response } from "express";
import AutorDAO_Buscar from "../../daos/Autor/AutorDAO_Buscar";
import { SQL_AUTOR_BUSCAR } from "../../repositorios/Autor/autor_buscar_sql";

class AutorControlador_Buscar extends AutorDAO_Buscar{
    public buscarAutor(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        AutorControlador_Buscar.encontrarAutorPorId(SQL_AUTOR_BUSCAR.BUSCAR,parametro,res);
    }

}
const autorControlador_Buscar= new AutorControlador_Buscar;
export default autorControlador_Buscar;