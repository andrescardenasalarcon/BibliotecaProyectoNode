"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PRESTAMO_CREAR = void 0;
exports.SQL_PRESTAMO_CREAR = {
    CREAR: 'INSERT INTO prestamo(id_cliente,fecha_inicio, descripcion) VALUES($1,$2,$3) RETURNING id_prestamo',
    CONFIRMAR: 'SELECT COUNT(p.id_prestamo) as Cantidad FROM prestamo p WHERE p.descripcion = lower(p.descripcion)'
};
