import { Request, Response } from "express";
import EditorialDAO_Actualizar from "../../daos/Editorial/EditorialDAO_Actualizar";
import { SQL_EDITORIAL_ACTUALIZAR } from "../../repositorios/Editorial/editorial_actualizar_sql";

class EditorialControlador_Actualizar extends EditorialDAO_Actualizar{
    public actualizarEditorial(req: Request, res: Response): void {
        const codigo = req.body.id_editorial;
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametro = [codigo,nombre,pais,telefono];
        EditorialControlador_Actualizar.actualizarEditorial(SQL_EDITORIAL_ACTUALIZAR.ACTUALIZAR,parametro, res);
    }

}
const editorialControlador_Actualizar = new EditorialControlador_Actualizar;
export default editorialControlador_Actualizar;