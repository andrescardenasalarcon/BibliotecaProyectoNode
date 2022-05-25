"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTOR_BUSCAR = void 0;
exports.SQL_AUTOR_BUSCAR = {
    BUSCAR: 'SELECT a.id_autor,a.nombre,a.apellido,a.nacionalidad, a.descripcion FROM autor a WHERE id_autor = $1',
};
