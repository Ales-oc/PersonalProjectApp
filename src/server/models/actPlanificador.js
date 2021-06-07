const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// create a schema
const actPlanSchema = new Schema({
  numero: { type: Number, required: true},
  tipo: { type: String, required: true},
  desc: { type: String, required: true},
  tiempoAprox: { type: Number, required: true},
  realizado: { type: Boolean, required: true},
  fechaIngreso: { type: String, required: true},
  idUsuario: { type: String, required: true}
}, {
  timestamps: true
});

module.exports = model('actividadesPlan', actPlanSchema);
