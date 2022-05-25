import { Request,Response } from "express";
import PrestamoDAO_Crear from "../../daos/Prestamos/PrestamoDAO_Crear";
import { SQL_PRESTAMO_CREAR } from "../../repositorios/Prestamos/prestamo_crear_sql";

class PrestamosControlador_Crear extends PrestamoDAO_Crear{
    public grabarPrestamo(req: Request, res: Response): void {
        const idCliente = req.body.id_cliente;
        const fechaInicio = req.body.fecha_inicio;
        const descripcion = req.body.descripcion;
        const parametro = [idCliente,fechaInicio,descripcion];
        PrestamosControlador_Crear.crearPrestamo(SQL_PRESTAMO_CREAR.CONFIRMAR,SQL_PRESTAMO_CREAR.CREAR, parametro, res);
        console.log(parametro);

    }
}
const prestamosControlador_Crear = new PrestamosControlador_Crear;
export default prestamosControlador_Crear;
