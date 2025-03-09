//1. Este código forma parte de la creación de una API REST , que es una forma en la que un servidor puede recibir y enviar datos usando HTTP .
const express = require('express') //Express : Facilita la creación del servidor web.
const morgan = require('morgan') //Morgan : Es un middleware que registra (loggea) las solicitudes HTTP en la consola, útil para depuración.
const cors = require('cors') //Cors : Permite que nuestra API pueda ser usada desde otros dominios (evita bloqueos de seguridad del navegador).
const app = express(); //Aquí estamos creando nuestro servidor con Express.
const mongoose=require('./database') //Aquí estamos importando solo la conexión a la base de datos desde el archivo database.js
// mongoose es una librería que nos permite trabajar con MongoDB de forma más fácil.

//2. Configuraciones

app.set('port', process.env.PORT || 3000); //Aquí estamos diciendo en qué puerto va a correr nuestro servidor.process.env.PORTverifica si hay un puerto definido en el sistema (por ejemplo, en la nube). Si no hay un puerto definido, usará el 3000 por defecto.
app.use(morgan('dev')); // morgan('dev')es un middleware (herramienta extra) que muestra en la consola todas las solicitudes que llegan al servidor
app.use(express.json());// método que ayuda a convertir el código para que el servidor pueda entender lo que viene del cliente.
app.use(cors({origin:'http://localhost:4200'})); //CORS permite que nuestro servidor acepte solicitudes desde otra dirección. Aquí estamos diciendo que solo acepta peticiones desde http://localhost:4200(Angular suele usar ese puerto). 

// rutas de nuestro servidor
app.use('/api/empleados',require('./routes/empleado.route')); //Definimos la URL base para la parte de empleados.require('./routes/empleado.routes')importa un archivo donde están todas las rutas para manejar empleados (listar, agregar, eliminar, etc.).


// Iniciar el servidor
app.listen(app.get('port'), ()=> {
    console.log('server activo en el puerto', app.get('port'));
}); // Inicia el servidor y le dice que escuche en el puerto que definimos antes.

// instalacion de nnpm install nodemon –D - Instale nodemon una herramienta que reinicia automáticamente el servidor cuando detecta cambios en el código.
// se inicia ejecutar el servidor con la siguiente linea de comando npm run dev



