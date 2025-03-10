//Este código define un controlador en Node.js para manejar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre empleados en una base de datos MongoDB usando Mongoose.



const Empleado = require('../models/empleado'); //Se importa el modelo Empleado desde el archivo correspondiente, lo que permite interactuar con la colección de empleados en la base de datos.
const empleadoCtrl = {};

//1. Obtener todos los empleados

empleadoCtrl.getEmpleados = async (req, res) => {

const empleados = await Empleado.find();

res.json(empleados);

}

// Crear empleados

empleadoCtrl.createEmpleados = async (req, res) => { 

const empleado = new Empleado(req.body);

await empleado.save();

res.json({

'status': 'Empleado guardado'

});

}

//Conseguir un único empleado

empleadoCtrl.getUnicoEmpleado = async (req, res) => { //Obtiene el ID del empleado desde los parámetros de la solicitud (req.params.id).  Usa findById() para buscar un empleado específico en la base de datos.  Devuelve el empleado encontrado en formato JSON.

const empleadoUnico = await Empleado.findById(req.params.id);

res.json(empleadoUnico);

}

//Actualizar empleado

empleadoCtrl.editarEmpleado = async (req, res) => {

const { id } = req.params;

const empleadoEdit = {

name: req.body.name,

position: req.body.position,

office: req.body.office,

salary: req.body.salary

};

await Empleado.findByIdAndUpdate(id, {$set: emepleadoEdit}, {new: true});

res.json({status: 'Empleado Actualizado'});

}

// Eliminar empleado

empleadoCtrl.eliminarEmpleado = async (req, res) => {

await Empleado.findByIdAndDelete(req.params.id);

res.json({status: 'Empleado Eliminado'});

}

//exporto el módulo

module.exports = empleadoCtrl;

//Este código define un CRUD básico para manejar empleados en una base de datos MongoDB. Sin embargo, se puede mejorar con validaciones y un mejor manejo de errores. 🚀






