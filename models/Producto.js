var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
  nombre: {type: String, required: true, max: 50},
  descripcion: {type: String, required: true, max: 200},
  precio: {type: Number, required: true, min: 0},
  stock: {type: Number, required: true, default: 0, min: 0},
  categoria: {type: String, required: true, max: 30},
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', ProductoSchema);
