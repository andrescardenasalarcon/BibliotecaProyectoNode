import { Router } from "express";
import clienteControlador_Actualizar from "../controladores/Cliente/ClienteControlador_Actualizar";
import clienteControlador_Borrar from "../controladores/Cliente/ClienteControlador_Borrar";
import clienteControlador_Buscar from "../controladores/Cliente/ClienteControlador_Buscar";
import clienteControlador_Crear from "../controladores/Cliente/ClienteControlador_Crear";
import clienteControlador_Mostrar from "../controladores/Cliente/ClienteControlador_Mostrar";

class ClienteRutas{
    public rutaClienteApi: Router;
    constructor(){
        this.rutaClienteApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaClienteApi.get('/listar',clienteControlador_Mostrar.mostrarLosClientes);
        this.rutaClienteApi.get('/listar/:elCodigo',clienteControlador_Buscar.buscarCliente);
        this.rutaClienteApi.post('/crearCliente',clienteControlador_Crear.grabarCliente);
        this.rutaClienteApi.put('/editarCliente',clienteControlador_Actualizar.actualizarCliente);
        this.rutaClienteApi.delete('/:elCodigo',clienteControlador_Borrar.borrarCliente);
    }
}
const detallePrestamosRutas = new ClienteRutas();
export default detallePrestamosRutas.rutaClienteApi;