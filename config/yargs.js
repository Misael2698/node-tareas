//Estamos creamos la informacion de nuestro comando tanto para la descripcion, 
//como para el estado de la tarea
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
};
const completado = {
    demand: true,
    //default: " ",
    alias: 'c',
    desc: "Marca como completado"
};

//Creamos los comando que vamos a usar para esta practica que en este caso 
//son 4 comandos y al final los exportamos con el modules.exports.
const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    }).command('actualizar', 'actualizar estado', {
        descripcion,
        completado
    }).command('eliminar', 'eliminar tarea', {
        descripcion
    }).command('listar', 'listar tarea', {
        completado
    })
    .help().argv;

module.exports = {
    argv
}