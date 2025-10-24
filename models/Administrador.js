var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdministradorSchema = new Schema({
  usuario: {type: String, required: true, unique: true, max: 50},
  clave: {type: String, required: true, max: 100},
  correo: {type: String, required: true, unique: true},
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Administrador', AdministradorSchema);
