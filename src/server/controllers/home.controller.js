//const User = require('../models/user');

const homeCtrl = {};

const jwt = require('jsonwebtoken');

homeCtrl.getActividadesHoy = (req, res) => {
  verifyToken(req)

  userId = getUserId(req)

  res.json({
    'status': 'Autorizado a ver los datos',
    'userId': userId
  });
}

function verifyToken(req, res, next) {

  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }

  const token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.staus(401).send('Unauthorize Request');
  }

  const payload = jwt.verify(token, 'PP_SecretKey');
  req.userId = payload._id;
  //next();

}

function getUserId(req){
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  return userId = payload._id;
}

module.exports = homeCtrl;

