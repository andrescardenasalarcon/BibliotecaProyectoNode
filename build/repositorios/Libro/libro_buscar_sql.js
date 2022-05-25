"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIBRO_BUSCAR = void 0;
exports.SQL_LIBRO_BUSCAR = {
    BUSCAR: 'SELECT  l.id_libro, l.codigo, l.titulo, l.isbn, l.fecha_publicacion, e.id_editorial, e.nombre as "Editorial" FROM libro l INNER JOIN editorial e ON l.id_editorial = e.id_editorial WHERE l.id_libro = $1'
};
