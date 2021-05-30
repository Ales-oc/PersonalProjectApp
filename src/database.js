const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/prueba', {

})
  .then(db => console.log('Database connected'))
  .catch(err => console.log(err))
