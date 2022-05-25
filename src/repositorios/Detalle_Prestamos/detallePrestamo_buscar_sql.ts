export const SQL_DETALLE_PRESTAMO_BUSCAR = {
    BUSCAR:'SELECT dp.id_detalle_prestamos, p.id_prestamo,p.descripcion,l.id_libro,l.titulo,dp.descripcion,dp.fecha_entrega ,dp.fecha_devolucion,dp.dias_mora FROM detalle_prestamos dp INNER JOIN prestamo p ON p.id_prestamo = dp.id_prestamo INNER JOIN libro l ON l.id_libro = dp.id_libro WHERE dp.id_detalle_prestamos = $1'
}