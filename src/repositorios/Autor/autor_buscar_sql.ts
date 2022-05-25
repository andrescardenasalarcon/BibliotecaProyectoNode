export const SQL_AUTOR_BUSCAR = {
    BUSCAR: 'SELECT a.id_autor,a.nombre,a.apellido,a.nacionalidad, a.descripcion FROM autor a WHERE id_autor = $1',
}