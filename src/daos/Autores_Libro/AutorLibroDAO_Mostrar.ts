import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class AutorLibroDAO_Mostrar{
    public static async obtenerAutoresLibro(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('!Error¡', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Autor_Libro' });
            });
    }

}
export default AutorLibroDAO_Mostrar;
