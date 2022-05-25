import { Request,Response } from "express";
import ClienteDAO_Mostrar from "../../daos/Cliente/ClienteDAO_Mostar";
import { SQL_CLIENTE_MOSTRAR } from "../../repositorios/Cliente/cliente_mostrar_sql";

class ClienteControlador_Mostrar extends ClienteDAO_Mostrar{
    public mostrarLosClientes(req: Request, res: Response): void {
        ClienteControlador_Mostrar.obtenerClientes(SQL_CLIENTE_MOSTRAR.TODO, [], res);
    }
}
const clienteControlador_Mostrar = new ClienteControlador_Mostrar;
export default clienteControlador_Mostrar;