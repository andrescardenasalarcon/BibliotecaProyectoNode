import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class ClienteDAO_Mostrar{
    public static async obtenerClientes(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('!Error¡', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Cliente' });
            });
    }
}
export default ClienteDAO_Mostrar;