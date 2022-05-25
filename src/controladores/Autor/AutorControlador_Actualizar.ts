import { Request, Response } from "express";
import AutorDAO_Actualizar from "../../daos/Autor/AutorDAO_Actualizar";
import { SQL_AUTOR_ACTUALIZAR } from "../../repositorios/Autor/autor_actualizar_sql";

class AutorControlador_Actualizar extends AutorDAO_Actualizar{

    public actualizarAutor(req: Request, res: Response): void {
        const codigo = req.body.id_autor;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const nacionalidad = req.body.nacionalidad;
        const descripcion = req.body.descripcion;
        const parametro = [codigo,nombre,apellido,nacionalidad,descripcion];
        AutorControlador_Actualizar.actualizarAutor(SQL_AUTOR_ACTUALIZAR.ACTUALIZAR,parametro, res);
    }
}
const autorControlador_Actualizar = new AutorControlador_Actualizar;
export default autorControlador_Actualizar;