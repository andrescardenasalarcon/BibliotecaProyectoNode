"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTOR_ACTUALIZAR = void 0;
exports.SQL_AUTOR_ACTUALIZAR = {
    ACTUALIZAR: 'UPDATE autor SET nombre = $2 , apellido = $3, nacionalidad=$4, descripcion=$5 WHERE id_autor = $1',
};
