const mongoose = require('mongoose'); // Importa la biblioteca Mongoose, que se usa para interactuar con MongoDB
const URI = 'mongodb://localhost/empleados'; //Es una cadena de conexión que indica la dirección de la base de datos MongoDB
mongoose.connect(URI) //Usa la URL definida para establecer la conexión con la base de datos MongoDB.
.then(db => console.log('DB is connected')) // Si la conexión es exitosa, se ejecuta la función que imprime "DB is connected" en la consola.
.catch(err => console.error(err)); //Si hay un error en la conexión, se captura con .catch(), y el error se muestra en la consola.
module.exports = mongoose; //Exporta la instancia de Mongoose para que otros archivos puedan usarla.