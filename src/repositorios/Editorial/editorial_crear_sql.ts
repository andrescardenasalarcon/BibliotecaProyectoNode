export const SQL_EDIOTRIAL_CREAR = {
    CREAR: 'INSERT INTO editorial(nombre,pais,telefono) VALUES($1,$2,$3) RETURNING id_editorial',

    CONFIRMAR:'SELECT COUNT(e.id_editorial) as Cantidad FROM editorial e \
    WHERE e.nombre = lower($1)', 
}