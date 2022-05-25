import { Request, Response } from "express";
import LibroDAO_Actualizar from "../../daos/Libro/LibroDAO_Actualizar";
import { SQL_LIBRO_ACTUZALIR } from "../../repositorios/Libro/libro_actualizar_sql";

class LibroControlador_Actualizar extends LibroDAO_Actualizar{
    public actualizarLibro(req: Request, res: Response): void {
        const idcodigo = req.body.id_libro;
        const titulo = req.body.titulo;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const fechaPublicacion = req.body.fecha_publicacion;
        const idEditorial = req.body.id_editorial;
        const parametro = [idcodigo,titulo,codigo,isbn,fechaPublicacion,idEditorial];
        LibroControlador_Actualizar.actualizarLibro(SQL_LIBRO_ACTUZALIR.ACTUALIZAR,parametro, res);
    }
}
const libroControlador_Actualizar = new LibroControlador_Actualizar;
export default libroControlador_Actualizar;
