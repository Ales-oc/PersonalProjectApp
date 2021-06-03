const express = require('express');
const app = express();

const morgan = require('morgan');

const cors = require('cors');

const { mongoose } = require('./database');

const User = require('./models/user')

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api', require('./routes/users.routes'), require('./routes/home.routes'));


//Starting server
app.listen(app.get('port'), () => console.log('PProject server running on port ', app.get('port')));


