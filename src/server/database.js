const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin@clusterpproject.ch6oj.mongodb.net/PersonalProjectDB?retryWrites=true&w=majority';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));

module.exports = mongoose;
