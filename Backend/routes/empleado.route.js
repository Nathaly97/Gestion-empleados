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
router.get('/', (req, res) => {
res.json({  // req Contiene la solicitud del cliente/res (response): Permite enviar una respuesta al cliente.
status: 'API REST funcionando' //envía una respuesta en formato JSON al cliente.
});
})

module.exports = router;
