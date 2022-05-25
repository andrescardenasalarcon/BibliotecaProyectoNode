"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CLIENTE_CREAR = void 0;
exports.SQL_CLIENTE_CREAR = {
    CREAR: 'INSERT INTO cliente(identificacion,nombre,apellido,direccion,telefono) VALUES($1,$2,$3,$4,$5) RETURNING id_cliente',
    CONFIRMAR: 'SELECT COUNT(c.id_cliente) as Cantidad FROM cliente c \
    WHERE c.nombre = lower($1)'
};
