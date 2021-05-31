const mongoose = require('mongoose');
const { error } = require('selenium-webdriver');

const URI = 'mongodb+srv://admin:admin@clusterpproject.ch6oj.mongodb.net/PersonalProjectDB?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
  
module.exports = mongoose;
