const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hace');
const colors = require('colors')
let comando = argv._[0];
//console.log(comando);
switch (comando) {
    case 'crear':
        console.log("Crear una tarea");

        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("listar todas las tareas");
        let listado = tareas.getLista();
        for (let tarea of listado) {
            console.log("=====================Por Hacer=====================".rainbow);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
        }
        break;
    case 'actualizar':
        console.log("actualizar una tareas");
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let borrar = tareas.borrar(argv.descripcion);
        console.log(borrar);

        break;

    default:
        console.log("comando desconocido");


}