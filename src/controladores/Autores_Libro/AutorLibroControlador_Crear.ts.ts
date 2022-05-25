import { Request,Response } from "express";
import AutorLibroDAO_Crear from "../../daos/Autores_Libro/AutorLibroDAO_Crear";
import { SQL_AUTOR_LIBRO_CREAR } from "../../repositorios/Autores_Libro/autorLibro_crear_sql";

class AutorLibroControlador_Crear extends AutorLibroDAO_Crear{
    public grabarAutorLibro(req: Request, res: Response): void {
        const idAutor = req.body.id_autor;
        const idLibro = req.body.id_libro;
        const parametro = [idAutor,idLibro];
        AutorLibroControlador_Crear.crearAutorLibro(SQL_AUTOR_LIBRO_CREAR.CONFIRMAR,SQL_AUTOR_LIBRO_CREAR.CREAR, parametro, res);

    }

}
const autorLibroControlador_Crear = new AutorLibroControlador_Crear;
export default autorLibroControlador_Crear;