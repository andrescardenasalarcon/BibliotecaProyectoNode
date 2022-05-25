import { Request,Response } from "express";
import ConsultasDAO_Mostrar from "../../daos/Consultas/ConsultasDAO_Mostrar";
import { SQL_CONSULTAS_NODE } from "../../repositorios/Consultas/ConsultasNode";

class ConsultasControlador extends ConsultasDAO_Mostrar{
    public mostrarEditorialPorIdLibro(req: Request, res: Response): void {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ConsultasControlador.obtenerConsultas(SQL_CONSULTAS_NODE.ID_LIBRO_EDITORIAL, parametro, res);
    }
    public mostrarClientePorIdPrestamo(req: Request, res: Response): void {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ConsultasControlador.obtenerConsultas(SQL_CONSULTAS_NODE.ID_PRESTAMO_CLIENTE, parametro, res);
    }
    public mostrarLibroPorIdDetallePrestamo(req: Request, res: Response): void {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ConsultasControlador.obtenerConsultas(SQL_CONSULTAS_NODE.ID_DETALLEPRESTAMO_LIBRO, parametro, res);
    }

}
const consultasControlador = new ConsultasControlador;
export default consultasControlador;