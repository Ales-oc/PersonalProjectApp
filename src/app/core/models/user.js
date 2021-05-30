const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
  nombreCompleto: { type: String, required: true},
  ciudad: { type: String },
  pais: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection : 'users' });

const User = mongoose.model('users', userSchema);

module.exports = User;
