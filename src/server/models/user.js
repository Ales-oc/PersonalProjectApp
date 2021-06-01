const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// create a schema
const userSchema = new Schema({
  nombre: { type: String, required: true},
  ciudad: { type: String },
  pais: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = model('user', userSchema);

