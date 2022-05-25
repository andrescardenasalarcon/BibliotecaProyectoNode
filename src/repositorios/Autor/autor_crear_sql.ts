export const SQL_AUTOR_CREAR = {
    
    CREAR: 'INSERT INTO autor(nombre,apellido,nacionalidad,descripcion) VALUES($1,$2,$3,$4) RETURNING id_autor',

    CONFIRMAR: 'SELECT COUNT(a.id_autor) as Cantidad FROM autor a \
    WHERE a.nombre = lower($1)',
}