"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTOR_LIBRO_CREAR = void 0;
exports.SQL_AUTOR_LIBRO_CREAR = {
    CREAR: 'INSERT INTO autores_libro(id_autor, id_libro) VALUES($1,$2) RETURNING id_autores_libro',
    CONFIRMAR: 'SELECT COUNT(id_autores_libro) as Cantidad FROM autores_libro',
};
