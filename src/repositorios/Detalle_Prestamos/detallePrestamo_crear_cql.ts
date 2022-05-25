export const SQL_DETALLE_PRESTAMO_CREAR = {
    CREAR: 'INSERT INTO detalle_prestamos(id_prestamo,id_libro,fecha_devolucion,dias_mora,descripcion,fecha_entrega) VALUES($1,$2,$3,$4,$5,$6) RETURNING id_detalle_prestamos',

    CONFIRMAR: 'SELECT COUNT(dp.id_prestamo) AS Cantidad FROM detalle_prestamos dp WHERE dp.dias_mora = $1'
}