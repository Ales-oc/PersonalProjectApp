const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// create a schema
const actSchema = new Schema({
  tipo: { type: String, required: true},
  tiempoDedicado: { type: Number, required: true},
  idUsuario: { type: String, required: true}
}, {
  timestamps: true
});

module.exports = model('actividades', actSchema);
