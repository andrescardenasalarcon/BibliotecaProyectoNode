import { Request,Response } from "express";
import LibroDAO_Crear from "../../daos/Libro/LibroDAO_Crear";
import { SQL_LIBRO_CREAR } from "../../repositorios/Libro/libro_crear_sql";

class LibroControlador_Crear extends LibroDAO_Crear{
    public grabarLibro(req: Request, res: Response): void {
        const titulo = req.body.titulo;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const fechaPublicacion = req.body.fecha_publicacion;
        const idEditorial = req.body.id_editorial;
        const parametro = [titulo,codigo,isbn,fechaPublicacion,idEditorial];
        LibroControlador_Crear.crearLibro(SQL_LIBRO_CREAR.CONFIRMAR,SQL_LIBRO_CREAR.CREAR, parametro, res);

    }

}
const libroControlador_Crear = new LibroControlador_Crear;
export default libroControlador_Crear;