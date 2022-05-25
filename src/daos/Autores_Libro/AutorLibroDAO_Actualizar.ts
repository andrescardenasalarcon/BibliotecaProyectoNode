import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class AutorLibroDAO_Actualizar{
    public static async actualizarAutorLibro(sqlActualizarYa: string, parametros: any, res: Response): Promise<any> {
        {
            await pool.task(async consulta => {
                return await consulta.result(sqlActualizarYa, parametros);


            })
                .then((respuesta) => {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Autor_Libro Actualizado!!!' });


                })
                .catch((mierror) => {
                    console.log(mierror);
                    res.status(400).json({ respuesta: '!Error¡ actualizando Autro_Libro' });

                });
        }
    }
}
export default AutorLibroDAO_Actualizar;