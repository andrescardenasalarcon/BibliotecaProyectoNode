import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class PrestamoDAO_Mostrar{
    public static async obtenerPrestamo(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('!Error¡', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Prestamo' });
            });
    }

}
export default PrestamoDAO_Mostrar;