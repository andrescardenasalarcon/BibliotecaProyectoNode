"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETALLE_PRESTAMO_ACTUALIZAR = void 0;
exports.SQL_DETALLE_PRESTAMO_ACTUALIZAR = {
    ACTUALIZAR: 'UPDATE detalle_prestamos SET id_prestamo=$2,id_libro=$3,fecha_devolucion=$4,dias_mora=$5,descripcion=$6,fecha_entrega=$7 WHERE id_detalle_prestamos = $1'
};
