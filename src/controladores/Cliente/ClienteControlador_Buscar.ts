import { Request,Response } from "express";
import ClienteDAO_Buscar from "../../daos/Cliente/ClienteDAO_Buscar";
import { SQL_CLIENTE_BUSCAR } from "../../repositorios/Cliente/cliente_buscar_Sql";

class ClienteControlador_Buscar extends ClienteDAO_Buscar{
    public buscarCliente(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ClienteControlador_Buscar.encontrarClientePorId(SQL_CLIENTE_BUSCAR.BUSCAR,parametro,res);
    }
}
const clienteControlador_Buscar = new ClienteControlador_Buscar;
export default clienteControlador_Buscar;
