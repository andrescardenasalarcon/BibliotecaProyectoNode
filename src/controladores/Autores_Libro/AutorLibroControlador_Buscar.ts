import { Request,Response } from "express";
import AutroLibroDAO_Buscar from "../../daos/Autores_Libro/AutorLibroDAO_Buscar";
import { SQL_AUTOR_LIBRO_BUSCAR} from "../../repositorios/Autores_Libro/autorLibro_buscar_sql"

class AutorLibroControlador_Buscar extends AutroLibroDAO_Buscar{
    public buscarAutorLibro(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        AutorLibroControlador_Buscar.encontrarAutorLibroPorId(SQL_AUTOR_LIBRO_BUSCAR.BUSCAR,parametro,res);

    }    
}
const autorLibroControlador_Buscar = new AutorLibroControlador_Buscar;
export default autorLibroControlador_Buscar;
