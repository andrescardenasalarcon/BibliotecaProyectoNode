import { Request, Response } from "express";
import PrestamoDAO_Actualizar from "../../daos/Prestamos/PrestamoDAO_Actualizar";
import { SQL_PRESTAMO_ACTUALZIAR } from "../../repositorios/Prestamos/prestamo_actualizar_sql";

class PrestamosControlador_Actualizar extends PrestamoDAO_Actualizar{

    public actualizarPrestamo(req: Request, res: Response): void {
        const codigo = req.body.id_prestamo;
        const idCliente = req.body.id_cliente;
        const fechaInicio = req.body.fecha_inicio;
        const descripcion = req.body.descripcion;
        const parametro = [codigo,idCliente,fechaInicio,descripcion];
        PrestamosControlador_Actualizar.actualizarPrestamo(SQL_PRESTAMO_ACTUALZIAR.ACTUALIZAR,parametro, res);
    }
}
const prestamosControlador_Actualizar = new PrestamosControlador_Actualizar;
export default prestamosControlador_Actualizar;