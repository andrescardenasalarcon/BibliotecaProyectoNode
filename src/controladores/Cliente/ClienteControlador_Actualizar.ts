import { Request, Response } from "express";
import ClienteDAO_Actualizar from "../../daos/Cliente/ClienteDAO_Actualizar";
import { SQL_CLIENTE_ACTUALIZAR } from "../../repositorios/Cliente/cliente_actualizar_sql";

class ClienteControlador_Actualizar extends ClienteDAO_Actualizar{

    public actualizarCliente(req: Request, res: Response): void {
        const codigo = req.body.id_cliente;
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [codigo,identificacion,nombre,apellido,direccion,telefono];
        ClienteControlador_Actualizar.actualizarCliente(SQL_CLIENTE_ACTUALIZAR.ACTUALIZAR,parametro, res);
    }
}
const clienteControlador_Actualizar = new ClienteControlador_Actualizar;
export default clienteControlador_Actualizar;