import { Router } from "express";
import autorControlador_Actualizar from "../controladores/Autor/AutorControlador_Actualizar";
import autorControlador_Borrar from "../controladores/Autor/AutorControlador_Borrar";
import autorControlador_Buscar from "../controladores/Autor/AutorControlador_Buscar";
import autorControlador_Crear from "../controladores/Autor/AutorControlador_Crear";
import autorControlador_Mostrar from "../controladores/Autor/AutorControlador_Mostrar";

class AutorRutas{
    public rutaAutorApi: Router;
    constructor(){
        this.rutaAutorApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaAutorApi.get('/listar',autorControlador_Mostrar.mostrarLosAutores);
        this.rutaAutorApi.get('/listar/:elCodigo',autorControlador_Buscar.buscarAutor);
        this.rutaAutorApi.post('/crearAutor',autorControlador_Crear.grabarAutor);
        this.rutaAutorApi.put('/editarAutor',autorControlador_Actualizar.actualizarAutor);
        this.rutaAutorApi.delete('/:elCodigo',autorControlador_Borrar.borrarAutor);
    }
}
const autorRutas = new AutorRutas();
export default autorRutas.rutaAutorApi;
