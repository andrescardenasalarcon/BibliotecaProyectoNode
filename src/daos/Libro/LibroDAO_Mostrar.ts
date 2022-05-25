import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class LibroDAO_Mostrar{

    public static async obtenerLibro(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('!Error¡', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Libro' });
            });
    }
}
export default LibroDAO_Mostrar;