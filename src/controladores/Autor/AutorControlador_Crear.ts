import { Request,Response } from "express";
import AutorDAO_Crear from "../../daos/Autor/AutorDAO_Crear";
import { SQL_AUTOR_CREAR } from "../../repositorios/Autor/autor_crear_sql";

class AutorControlador_Crear extends AutorDAO_Crear{
    public grabarAutor(req: Request, res: Response): void {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const nacionalidad = req.body.nacionalidad;
        const descripcion = req.body.descripcion;
        const parametro = [nombre,apellido,nacionalidad,descripcion];
        AutorControlador_Crear.crearAutor(SQL_AUTOR_CREAR.CONFIRMAR,SQL_AUTOR_CREAR.CREAR, parametro, res);

    }

}
const autorControlador_Crear = new AutorControlador_Crear;
export default autorControlador_Crear;