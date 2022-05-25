import { Request,Response } from "express";
import LibroDAO_Mostrar from "../../daos/Libro/LibroDAO_Mostrar";
import { SQL_LIBRO_MOSTRAR } from "../../repositorios/Libro/libro_mostrar_sql";

class LibroControlador_Mostrar extends LibroDAO_Mostrar{
    public mostrarLosLibros(req: Request, res: Response): void {
        LibroControlador_Mostrar.obtenerLibro(SQL_LIBRO_MOSTRAR.TODO, [], res);
    }
}
const libroControlador_Mostrar = new LibroControlador_Mostrar;
export default libroControlador_Mostrar;