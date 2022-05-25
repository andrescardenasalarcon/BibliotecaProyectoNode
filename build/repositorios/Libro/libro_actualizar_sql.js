"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIBRO_ACTUZALIR = void 0;
exports.SQL_LIBRO_ACTUZALIR = {
    ACTUALIZAR: 'UPDATE libro SET titulo=$2,codigo=$3,isbn=$4,fecha_publicacion=$5,id_editorial=$6 WHERE id_libro=$1'
};
