const express = require('express');
const app = express();

const morgan = require('morgan');

const { mongoose } = require('./database');

//const url = 'mongodb+srv://admin:admin@clusterpproject.ch6oj.mongodb.net/PersonalProjectDB?retryWrites=true&w=majority';

//const User = require('./models/user');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users.routes'));

//Starting server
app.listen(app.get('port'), () => console.log('PProject server running on port ', app.get('port')));

