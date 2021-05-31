const mongoose = require('mongoose');
const { Schema } = mongoose;

// create a schema
const userSchema = new Schema({
  nombreCompleto: { type: String, required: true},
  ciudad: { type: String },
  pais: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection : 'users' });

module.exports = mongoose.model('user', userSchema);

