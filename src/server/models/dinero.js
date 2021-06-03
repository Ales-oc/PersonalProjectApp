const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// create a schema
const dineroSchema = new Schema({
  total: { type: Number, required: true},
  ahorrado: { type: Number, required: true},
  mes: { type: String, required: true}
}, {
  timestamps: true
});

module.exports = model('dinero', dineroSchema);
