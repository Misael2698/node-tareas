let tareasPorHacer = [];
//se crea un vector vacio
const fs = require('fs');
//el cargaDB nos cargada los datos que se encuentra en nuestro json creado o sino el vector vacio para que se 
//llene con datos
const cargaDB = () => {
        try {
            tareasPorHacer = require('../db/data.json');

        } catch (error) {
            tareasPorHacer = [];
        }

    }
    //creamos una funcion guardarDB que nos guardara los datos que escribimos en una archivo .json
const guardarDB = () => {
        let data = JSON.stringify(tareasPorHacer);
        fs.writeFile('db/data.json', data, (err) => {
            if (err) throw new Error('No se puedo guardar', err);
        });
    }
    //la funcion crear va a tomar como parametro la descripcion de la tarea y por defecto el completado va a ser false
const crear = (descripcion) => {
        //primero llamamos a cargaDB para que nos cargue los datos del json y es que hay datos casos contrario
        //se cargar un vector vacio
        cargaDB();
        let tarea = {
            descripcion,
            completado: false

        };
        //guardamos en nuestro vector vacio con el push y luego llamamo al guardarDB para que cree el json 
        //con el nuevo datos
        tareasPorHacer.push(tarea);
        guardarDB();
        return tarea;
    }
    //importamos
    //la opcion de listar llamara a la funcion getLista que resivira como parametro true si la tarea se ha completado
    //o false si no se ha cumplido la tarea
const getLista = (completado) => {
    cargaDB();
    //Se utiliza un if para que cuando el usuario no ingrese true o false nos liste todo
    if (completado !== " ") {
        //el parametro que se ingresa es un string por que lo transformamos a booleano
        if (completado === "true") {
            completado = true;
        } else {
            completado = false;
        }
        // se utiliza nuevamente el filter para que me liste solo las tareas completadas o no completadas
        let nuevoListado = tareasPorHacer.filter(tarea => tarea.completado === completado);
        //console.log(nuevoListado);
        tareasPorHacer = nuevoListado;
        return tareasPorHacer

    } else {
        //si el usuario no escribe true o false nos listara todo los datos
        return tareasPorHacer;

    }





}


//El comando actualizar vamos coger dos paramentros, la descripcion y el estado por defecto va estar true
const actualizar = (descripcion, completado) => {
        if (completado === "true") {
            completado = true;
        } else {
            completado = false;
        }
        cargaDB();
        // se usa el .findIndex para allar el numero al que pertence la tarea para poder actualizarlos
        let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
        if (index >= 0) {
            tareasPorHacer[index].completado = completado;
            guardarDB();
            return true;
        }
        return false;

    }
    //El metodo borrar que borrara una tarea que eligamos
const borrar = (descripcion) => {
        cargaDB();
        //Se ha usado el .filter para que filtre las tareas que sean diferentes a la de hayamos escritos
        //y creara una nueva lista con los datos anteriores pero ya no con el eliminado
        let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);

        //si  el tamaño de la nueva lista es igual a la anterior, eso no dara a enteder que no se ha borrado 
        //el dato por que nos retornara false.
        if (tareasPorHacer.length === nuevoListado.length) {
            return false;
        } else {
            //caso contrario la nueva lista va a pasar a ser la tareasPorHacer y guardamos
            tareasPorHacer = nuevoListado;
            guardarDB();
            return true;
        }

    }
    //Exportamos los modulos
module.exports = {
    crear,
    getLista,
    borrar,
    actualizar
}