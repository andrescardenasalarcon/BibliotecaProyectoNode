import { Request,Response } from "express";
import PrestamoDAO_Mostrar from "../../daos/Prestamos/PrestamoDAO_Mostrar";
import { SQL_PRESTAMO_MOSTRAR } from "../../repositorios/Prestamos/prestamo_mostrar_sql";

class PrestamosControlador_Mostrar extends PrestamoDAO_Mostrar{
    public mostrarLosPrestamos(req: Request, res: Response): void {
        PrestamosControlador_Mostrar.obtenerPrestamo(SQL_PRESTAMO_MOSTRAR.TODO, [], res);
    }
}
const prestamosControlador_Mostrar = new PrestamosControlador_Mostrar;
export default prestamosControlador_Mostrar;