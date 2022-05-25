"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CLIENTE_ACTUALIZAR = void 0;
exports.SQL_CLIENTE_ACTUALIZAR = {
    ACTUALIZAR: 'UPDATE cliente SET identificacion=$2,nombre=$3,apellido=$4,direccion=$5,telefono=$6 WHERE id_cliente = $1'
};
