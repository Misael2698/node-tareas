const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hace');
const colors = require('colors')
let comando = argv._[0];
//console.log(comando);
// se crea un switch con las opciones crear, listar,actulizar y borrar que necesitara para este programa
//ademas se importas las funciones de nuestro tareas-por-hace.js
switch (comando) {
    case 'crear':
        console.log("Crear una tarea");
        //llamos a nuestro metodo crear que recibira como parametro la descripcion 
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("listar todas las tareas");
        //llamos a nuestro metodo getLista que recibira como parametro el estado de la tarea 
        let listado = tareas.getLista(argv.completado);
        // se creo un for para que recorra la lista, ademas que el titulo tiene el .rainbow
        //que nos dara color a este mismo
        for (let tarea of listado) {
            console.log("=====================Tareas=====================".rainbow);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
        }
        break;
    case 'actualizar':
        console.log("actualizar una tareas");
        //llamos a nuestro metodo actualizar que recibira como parametro la descripcion y el estado a que queremos actualizar 
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        //llamos a nuestro metodo borrar que recibira como parametro la descripcion 
        let borrar = tareas.borrar(argv.descripcion);
        console.log(borrar);

        break;

    default:

        console.log("comando desconocido");


}
//adicional se creo un .gitignore que al momento de subir a nuestro github no suba la carpeta node_modules