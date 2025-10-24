var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticuloSchema = new Schema({
  descripcion: {type: String, required: true, max: 200},
  precio_soles: {type: Number, required: true, min: 0},
  cantidad: {type: Number, required: true, min: 0},
  stock: {type: Number, required: true, min: 0},
  precio_dolares: {type: Number, required: true, min: 0},
  Marca: {type: String, required: true, max: 50},
  Modelo: {type: String, required: true, max: 50},
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Articulo', ArticuloSchema);
