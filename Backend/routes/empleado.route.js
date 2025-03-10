/**
1. Se importa Express.
2 Se crea un enrutador con express.Router().
3 Se define una ruta GET en '/' que devuelve un mensaje JSON.
4 Se exporta el enrutador para ser utilizado en el servidor principal.
Este código sirve para manejar solicitudes GET en una API REST de Express.
*/

const express = require('express'); //require('express') importa el framework Express para poder crear un servidor y manejar rutas.
const router = express.Router(); //crea un manejador de rutas. Permite definir rutas separadas sin sobrecargar el archivo principal del servidor.
/* generamos un ejemplo cuando le soliciten algo al servidor por el método GET **/
const empleadoCtrl = require('../controllers/empleado.controller');
router.get('/', empleadoCtrl.getEmpleados); // Rutas más limpias (obtener empleados)
router.post('/', empleadoCtrl.createEmpleados);//guardar
router.get('/:id', empleadoCtrl.getUnicoEmpleado);// obtiene un único empleado
router.put('/:id',empleadoCtrl.editarEmpleado); //Actualizar datos (uno a la vez)
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;
