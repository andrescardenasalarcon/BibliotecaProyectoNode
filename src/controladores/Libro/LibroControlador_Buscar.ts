import { Request,Response } from "express";
import LibroDAO_Buscar from "../../daos/Libro/LibroDAO_Buscar";
import { SQL_CLIENTE_BUSCAR } from "../../repositorios/Cliente/cliente_buscar_Sql";
import { SQL_LIBRO_BUSCAR } from "../../repositorios/Libro/libro_buscar_sql";

class LibroControlador_Buscar extends LibroDAO_Buscar{
    public buscarLibro(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        LibroControlador_Buscar.encontrarLibroPorId(SQL_LIBRO_BUSCAR.BUSCAR,parametro,res);
    }
}
const libroControlador_Buscar = new LibroControlador_Buscar;
export default libroControlador_Buscar;