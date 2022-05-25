import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class AutorLibroDAO_Crear{
    public static async crearAutorLibro(sqlConfirmar: string, sqlCrear: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlCrear, parametros);
            } else {
                return { id_autores_libro: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.id_autores_libro != 0) {
                    res.status(200).json({ respuesta: 'Autor_Libro Creado!!!', nuevoCodigo: respuesta.id_autores_libro })
                } else {
                    console.log(respuesta)
                    res.status(402).json({ respuesta: '!Error¡ creando registro, probablmente este repetido' });
                }
            })
            .catch((mierror) => {
                console.log(mierror);
                res.status(400).json({ respuesta: '!Error¡ en las consultas ', mierror });
            });
    }

}
export default AutorLibroDAO_Crear;