export const SQL_AUTOR_LIBRO_BUSCAR ={
    BUSCAR: "select al.id_autores_libro,a.id_autor, CONCAT(a.nombre, ' ', a.apellido) Autor, l.id_libro,l.titulo from autores_libro al INNER JOIN autor a ON al.id_autor = a.id_autor LEFT JOIN libro l ON l.id_libro = al.id_libro WHERE al.id_autores_libro = $1",
}