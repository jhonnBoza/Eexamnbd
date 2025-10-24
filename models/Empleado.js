var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
  nombre: {type: String, required: true, max: 30},
  apellido: {type: String, required: true, max: 30},
  cargo: {type: String, required: true, max: 50},
  sueldo: {type: Number, required: true, min: 0},
  email: {type: String, required: true},
  telefono: {type: String, required: true, max: 15},
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
