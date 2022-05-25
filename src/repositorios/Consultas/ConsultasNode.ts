export const SQL_CONSULTAS_NODE = {
    ID_LIBRO_EDITORIAL: 'SELECT l.id_libro,l.titulo,e.id_editorial,e.nombre FROM libro l INNER JOIN editorial e ON e.id_editorial = l.id_editorial WHERE l.id_libro = $1',
    ID_PRESTAMO_CLIENTE: "SELECT pe.id_prestamo,pe.descripcion, CONCAT(c.nombre, ' ', c.apellido) Cliente FROM prestamo pe INNER JOIN cliente c on pe.id_cliente = c.id_cliente WHERE pe.id_prestamo = $1",
    ID_DETALLEPRESTAMO_LIBRO: 'SELECT dp.id_detalle_prestamos as "Detalle-Prestamo", l.id_libro, l.titulo FROM detalle_prestamos dp INNER JOIN libro l ON dp.id_libro = l.id_libro WHERE dp.id_detalle_prestamos = $1'
}