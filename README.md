## aplicacion de comando Nodejs
Recuerde instalar los paquetes
```
npm install
```
## Utilizar el programa
el programa constara de 4 opcion:
°crear la tarea
°listar las tareas
°actualizar el estado de una tarea
°borrar una tarea

## opcion crear tarea
Para crear una tarea se usa el siguiente comando
```
node index crear -d "Estudiar para el examen"
```
Nota: Se usa comillas dobles cuando hay mas de una palabra eje:
```
node index crear -d "Hola mundo" 
```
caso contrario solo se pode una palabra
```
node index crear -d Saludar
```
## opcion listar tarea
En el listar tarea se requiere un parameto que es el estado de la tarea true(completada) o false (imcompleta)
Tareas completadas
```
node index listar -c true
```
resultado:
```
=====================Tareas=====================
Jugar
Estado:  true
```
Tareas imcompletas
```
node index listar -c false
```
resultado:
```
=====================Tareas=====================
Estudiar
Estado:  false
=====================Tareas=====================
Estudiar para el examen
Estado:  false
```
y para listar todoas las tareas 
```
 node index listar -c " "
```
## opcion actualizar tarea
Este comando recibira el nombre de la tarea y el estado que queremos cambiar la tarea true o false
```
node index actualizar -d "Estudiar para el examen" -c true

```
## opcion Borrar tarea
Se usa el comando
```
node index eliminar -d "Estudiar para el examen"
```
y podemos listar todo y podemos ver que se ha eliminado la tarea
```
listar todas las tareas
=====================Tareas=====================
Jugar
Estado:  true
=====================Tareas=====================
Estudiar
Estado:  true
```