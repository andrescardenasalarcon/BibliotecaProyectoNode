"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PRESTAMO_ACTUALZIAR = void 0;
exports.SQL_PRESTAMO_ACTUALZIAR = {
    ACTUALIZAR: 'UPDATE prestamo SET id_cliente=$2,fecha_inicio=$3, descripcion=$4 WHERE id_prestamo=$1'
};
