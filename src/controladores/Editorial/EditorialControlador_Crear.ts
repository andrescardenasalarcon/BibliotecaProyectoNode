import { Request,Response } from "express";
import EditorialDAO_Crear from "../../daos/Editorial/EditorialDAO_Crear";
import { SQL_EDIOTRIAL_CREAR } from "../../repositorios/Editorial/editorial_crear_sql";

class EditorialControlador_Crear extends EditorialDAO_Crear{
    public grabarEditorial(req: Request, res: Response): void {
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametro = [nombre,pais,telefono];
        EditorialControlador_Crear.crearEditorial(SQL_EDIOTRIAL_CREAR.CONFIRMAR,SQL_EDIOTRIAL_CREAR.CREAR, parametro, res);

    }

}
const editorialControlador_Crear = new EditorialControlador_Crear;
export default editorialControlador_Crear;