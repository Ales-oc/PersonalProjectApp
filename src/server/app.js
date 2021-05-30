const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@clusterpproject.ch6oj.mongodb.net/PersonalProjectDB?retryWrites=true&w=majority';

const User = require('../app/core/models/user');

app.listen(3000, () => console.log('PProject server running on port 3000!'))

app.get('/api/user/login', (req, res) => {
  res.send('Hello World!')

})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))



app.post('/api/user/login', (req, res) => {
  try {
    setTimeout(function() {
      mongoose.connect(url, {useNewUrlParser: true});
    }, 60000);
  } catch (error) {
    handleError(error);
  }
})
