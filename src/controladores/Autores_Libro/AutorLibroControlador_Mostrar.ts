import { Request,Response } from "express";
import AutorLibroDAO_Mostrar from "../../daos/Autores_Libro/AutorLibroDAO_Mostrar";
import { SQL_AUTOR_MOSTRAR } from "../../repositorios/Autor/autor_mostrar_sql";
import { SQL_AUTOR_LIBRO_MOSTRAR } from "../../repositorios/Autores_Libro/autorLibro_mostrar_sql";

class AutorLibroControlador_Mostrar extends AutorLibroDAO_Mostrar{
    public mostrarLosAutoresLibro(req: Request, res: Response): void {
        AutorLibroControlador_Mostrar.obtenerAutoresLibro(SQL_AUTOR_LIBRO_MOSTRAR.TODO, [], res);
    } 
}
const autorLibroControlador_Mostrar = new AutorLibroControlador_Mostrar;
export default autorLibroControlador_Mostrar;