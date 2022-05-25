import { Request, Response } from "express";
import ClienteDAO_Borrar from "../../daos/Cliente/ClienteDAO_Borrar";
import { SQL_CLIENTE_BORRAR } from "../../repositorios/Cliente/cliente_borrar_sql";

class ClienteControlador_Borrar extends ClienteDAO_Borrar{
    public borrarCliente(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ClienteControlador_Borrar.eliminarPorId(SQL_CLIENTE_BORRAR.BORRAR,parametro,res);
    }
}
const clienteControlador_Borrar = new ClienteControlador_Borrar;
export default clienteControlador_Borrar;
