import { Router } from "express";
import autorLibroControlador_Crear from "../controladores/Autores_Libro/AutorLibroControlador_Crear.ts";
import autorLibroControlador_Actualizar from "../controladores/Autores_Libro/AutorLibroControlador_Actualizar";
import autorLibroControlador_Borrar from "../controladores/Autores_Libro/AutorLibroControlador_Borrar";
import autorLibroControlador_Mostrar from "../controladores/Autores_Libro/AutorLibroControlador_Mostrar";
import autorLibroControlador_Buscar from "../controladores/Autores_Libro/AutorLibroControlador_Buscar";

class AutoresLibroRutas{
    public rutaAutoresLibroApi: Router;
    constructor(){
        this.rutaAutoresLibroApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaAutoresLibroApi.get('/listar',autorLibroControlador_Mostrar.mostrarLosAutoresLibro);
        this.rutaAutoresLibroApi.get('/listar/:elCodigo',autorLibroControlador_Buscar.buscarAutorLibro);
        this.rutaAutoresLibroApi.post('/crearAutoresLibro',autorLibroControlador_Crear.grabarAutorLibro);
        this.rutaAutoresLibroApi.put('/editarAutoresLibro',autorLibroControlador_Actualizar.actualizarAutorLibro);
        this.rutaAutoresLibroApi.delete('/:elCodigo',autorLibroControlador_Borrar.borrarAutorLibro);
    }
}
const autoresLibroRutas = new AutoresLibroRutas();
export default autoresLibroRutas.rutaAutoresLibroApi;
