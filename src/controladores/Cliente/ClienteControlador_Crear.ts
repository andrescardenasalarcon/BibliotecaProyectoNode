import { Request,Response } from "express";
import ClienteDAO_Crear from "../../daos/Cliente/ClienteDAO_Crear";
import { SQL_CLIENTE_CREAR } from "../../repositorios/Cliente/cliente_crear_sql";

class ClienteControlador_Crear extends ClienteDAO_Crear{
    public grabarCliente(req: Request, res: Response): void {
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [identificacion,nombre,apellido,direccion,telefono];
        ClienteControlador_Crear.crearCliente(SQL_CLIENTE_CREAR.CONFIRMAR,SQL_CLIENTE_CREAR.CREAR, parametro, res);

    }
}
const clienteControlador_Crear = new ClienteControlador_Crear;
export default clienteControlador_Crear;