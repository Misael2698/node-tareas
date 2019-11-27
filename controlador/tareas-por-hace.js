let tareasPorHacer = [];
//se crea un vector vacio
const fs = require('fs');
const cargaDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');

    } catch (error) {
        tareasPorHacer = [];
    }

}
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puedo guardar', err);
    });
}
const crear = (descripcion) => {
        cargaDB();
        let tarea = {
            descripcion,
            completado: false

        };
        //guardamos en nuestro vector vacio
        tareasPorHacer.push(tarea);
        guardarDB();
        return tarea;
    }
    //importamos
const getLista = () => {
    cargaDB();
    return tareasPorHacer;
}
const actualizar = (descripcion, completado = true) => {
    cargaDB();
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;

}
const borrar = (descripcion) => {
    cargaDB();
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}
module.exports = {
    crear,
    getLista,
    borrar,
    actualizar
}