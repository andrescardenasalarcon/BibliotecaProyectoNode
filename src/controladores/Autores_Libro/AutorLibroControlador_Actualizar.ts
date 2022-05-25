import { Request, Response } from "express";
import AutorLibroDAO_Actualizar from "../../daos/Autores_Libro/AutorLibroDAO_Actualizar";
import { SQL_AUTOR_LIBRO_ACTUALIZAR } from "../../repositorios/Autores_Libro/autorLibro_actualizar_sql";

class AutorLibroControlador_Actualizar extends AutorLibroDAO_Actualizar{
    public actualizarAutorLibro(req: Request, res: Response): void {
        const codigo = req.body.id_autores_libro;
        const idAutor = req.body.id_autor;
        const idLibro = req.body.id_libro;
        const parametro = [codigo,idAutor,idLibro];
        AutorLibroControlador_Actualizar.actualizarAutorLibro(SQL_AUTOR_LIBRO_ACTUALIZAR.ACTUALIZAR,parametro, res);
    }
}
const autorLibroControlador_Actualizar = new AutorLibroControlador_Actualizar;
export default autorLibroControlador_Actualizar;