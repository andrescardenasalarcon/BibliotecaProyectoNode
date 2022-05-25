import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class AutorLibroDAO_Buscar{
    protected static async encontrarAutorLibroPorId(sqlBuscar: string, parametros: any, res: Response): Promise<any> {

        await pool.one(sqlBuscar, parametros)
            .then((dato) => {
                console.log(dato);
                res.status(200).json({ respuesta: dato });
            })
            .catch((mierror) => {
                console.log(mierror)
                return res.status(400).json({ msg: '!Error¡ buscando Autor_Libro' });
            });
    }

}
export default AutorLibroDAO_Buscar;