import { Request,Response } from "express";
import EditorialDAO_Mostrar from "../../daos/Editorial/EditorialDAO_Mostrar";
import { SQL_EDITORIAL_MOSTRAR } from "../../repositorios/Editorial/editrorial_mostrar_sql";

class EditorialControlador_Mostrar extends EditorialDAO_Mostrar{
    public mostrarLasEditoriales(req: Request, res: Response): void {
        EditorialControlador_Mostrar.obtenerEditorial(SQL_EDITORIAL_MOSTRAR.TODO, [], res);
    }


}
const editorialControlador_Mostrar = new EditorialControlador_Mostrar;
export default editorialControlador_Mostrar;