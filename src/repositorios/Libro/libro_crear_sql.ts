export const SQL_LIBRO_CREAR = {
    CREAR: 'INSERT INTO libro(titulo,codigo,isbn,fecha_publicacion,id_editorial) VALUES($1,$2,$3,$4,$5) RETURNING id_libro',

    CONFIRMAR: 'SELECT COUNT(l.id_libro) as Cantidad FROM libro l \
    WHERE l.titulo = lower($1)',
}