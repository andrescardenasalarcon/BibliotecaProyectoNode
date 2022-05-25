import { Router } from "express";
import libroControlador_Actualizar from "../controladores/Libro/LibroControlador_Actualizar";
import libroControlador_Buscar from "../controladores/Libro/LibroControlador_Buscar";
import libroControlador_Crear from "../controladores/Libro/LibroControlador_Crear";
import libroControlador_Mostrar from "../controladores/Libro/LibroControlador_Mostrar";
import libroControlador_Borrar from "../controladores/Libro/LibroControaldor_Borrar";

class LibroRutas{
    public rutaLibroApi: Router;
    constructor(){
        this.rutaLibroApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaLibroApi.get('/listar',libroControlador_Mostrar.mostrarLosLibros);
        this.rutaLibroApi.get('/listar/:elCodigo',libroControlador_Buscar.buscarLibro);
        this.rutaLibroApi.post('/crearLibro',libroControlador_Crear.grabarLibro);
        this.rutaLibroApi.put('/editarLibro',libroControlador_Actualizar.actualizarLibro);
        this.rutaLibroApi.delete('/:elCodigo',libroControlador_Borrar.borrarLibro);
    }
}
const libroRutas = new LibroRutas();
export default libroRutas.rutaLibroApi;