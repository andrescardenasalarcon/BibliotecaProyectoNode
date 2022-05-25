import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class DetallePrestamosDAO_Actualizar{

    public static async actualizarDetallePrestamo(sqlActualizarYa: string, parametros: any, res: Response): Promise<any> {
        {
            await pool.task(async consulta => {
                return await consulta.result(sqlActualizarYa, parametros);


            })
                .then((respuesta) => {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Detalle_Prestamo Actualizado!!!' });


                })
                .catch((mierror) => {
                    console.log(mierror);
                    res.status(400).json({ respuesta: '!Error¡ actualizando Detalle_Prestamo' });

                });
        }
    } 
}
export default DetallePrestamosDAO_Actualizar;