//Este código define un modelo de datos en MongoDB usando Mongoose, que es una biblioteca para manejar bases de datos NoSQL en Node.js

const mongoose = require('mongoose'); //Carga el módulo mongoose, que permite interactuar con una base de datos MongoDB
const {Schema} = mongoose;
const EmpleadoSchema = new Schema({ //Crea un esquema (EmpleadoSchema) que define la estructura que tendrán los documentos en MongoDB.
name: {type:String, required:true},
position: {type:String, required:true},
office: {type:String, required:true},
salary: {type:Number, required:true},
});
module.exports = mongoose.model('Empleado', EmpleadoSchema); //Crea y exporta un modelo basado en EmpleadoSchema.// mongoose.model('Empleado', EmpleadoSchema) crea un modelo llamado Empleado que se usará para interactuar con la colección empleados en MongoDB.

