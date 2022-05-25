import { Router } from "express";
import editorialControlador_Actualizar from "../controladores/Editorial/EditorialControlador_Actualizar";
import editorialControlador_Borrar from "../controladores/Editorial/EditorialControlador_Borrar";
import editorialControlador_Buscar from "../controladores/Editorial/EditorialControlador_Buscar";
import editorialControlador_Crear from "../controladores/Editorial/EditorialControlador_Crear";
import editorialControlador_Mostrar from "../controladores/Editorial/EditorialControlador_Mostrar";

class EditorialRutas{
    public rutaEditorialApi: Router;
    constructor(){
        this.rutaEditorialApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaEditorialApi.get('/listar',editorialControlador_Mostrar.mostrarLasEditoriales);
        this.rutaEditorialApi.get('/listar/:elCodigo',editorialControlador_Buscar.buscarAutor);
        this.rutaEditorialApi.post('/crearEditorial',editorialControlador_Crear.grabarEditorial);
        this.rutaEditorialApi.put('/editarEditorial',editorialControlador_Actualizar.actualizarEditorial);
        this.rutaEditorialApi.delete('/:elCodigo',editorialControlador_Borrar.borrarEditorial);
    }
}
const editorialRutas = new EditorialRutas();
export default editorialRutas.rutaEditorialApi;