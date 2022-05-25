import { Request,Response } from "express";
import AutorDAO_Mostrar from "../../daos/Autor/AutorDAO_Mostrar";
import { SQL_AUTOR_MOSTRAR } from "../../repositorios/Autor/autor_mostrar_sql";

class AutorControlador_Mostrar extends AutorDAO_Mostrar{
    public mostrarLosAutores(req: Request, res: Response): void {
        AutorControlador_Mostrar.obtenerAutor(SQL_AUTOR_MOSTRAR.TODO, [], res);
    }
}
const autorControlador_Mostrar = new AutorControlador_Mostrar;
export default autorControlador_Mostrar;