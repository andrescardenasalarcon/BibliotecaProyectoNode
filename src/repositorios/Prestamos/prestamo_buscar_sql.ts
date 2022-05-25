export const SQL_PRESTAMOS_BUSCAR = {
    BUSCAR: 'SELECT p.id_prestamo,p.descripcion,p.fecha_inicio,c.id_cliente,(c.nombre,c.apellido) as "Cliente" FROM prestamo p INNER JOIN cliente c ON p.id_cliente = c.id_cliente WHERE p.id_prestamo=$1'
    
}