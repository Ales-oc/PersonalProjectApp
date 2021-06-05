const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// create a schema
const dineroGanadoSchema = new Schema({
  total: { type: Number, required: true},
  mes: { type: String, required: true},
  idUsuario: { type: String, required: true}
}, {
  timestamps: true
});

module.exports = model('dineroGanado', dineroGanadoSchema);
