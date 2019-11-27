const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
};
const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como completado"
};
const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    }).command('actualizar', 'actualizar estado', {
        descripcion,
        completado
    }).command('eliminar', 'eliminar tarea', {
        descripcion
    })
    .help().argv;

module.exports = {
    argv
}