import { Router } from "express";
import consultas_Mostrar from "../controladores/ConsultasControlador.ts/ConsultasControlador_Mostrar";

class ConsultasRutas{
    public rutaConsultaApi: Router;
    constructor(){
        this.rutaConsultaApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaConsultaApi.get('/idLibro/:elCodigo',consultas_Mostrar.mostrarEditorialPorIdLibro);
        this.rutaConsultaApi.get('/idPrestamo/:elCodigo',consultas_Mostrar.mostrarClientePorIdPrestamo);
        this.rutaConsultaApi.get('/idDetallePrestamo/:elCodigo',consultas_Mostrar.mostrarLibroPorIdDetallePrestamo);

    }
}
const consultasRutas = new ConsultasRutas();
export default consultasRutas.rutaConsultaApi;