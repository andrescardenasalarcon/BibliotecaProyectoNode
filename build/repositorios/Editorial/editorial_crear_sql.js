"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDIOTRIAL_CREAR = void 0;
exports.SQL_EDIOTRIAL_CREAR = {
    CREAR: 'INSERT INTO editorial(nombre,pais,telefono) VALUES($1,$2,$3) RETURNING id_editorial',
    CONFIRMAR: 'SELECT COUNT(e.id_editorial) as Cantidad FROM editorial e \
    WHERE e.nombre = lower($1)',
};
