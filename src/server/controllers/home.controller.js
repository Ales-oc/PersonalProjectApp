const Actividad = require('../models/actividades');

const homeCtrl = {};

const jwt = require('jsonwebtoken');
const { json } = require('express');

homeCtrl.getActividadesHoy = (req, res) => {
  verifyToken(req)

  userId = getUserId(req)

  res.json({
    'status': 'Autorizado a ver los datos',
    'userId': userId
  });
}

homeCtrl.createAct = async (req, res) =>  {

  const { tipo, tiempoDedicado } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUsuario = payload._id;

  const newActividad = new Actividad({
    tipo,
    tiempoDedicado,
    idUsuario
  });

  await newActividad.save();

  console.log(req.body);

  res.status(200).json({
    'status': 'Act saved',
    newActividad
  });
};

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

}

function getUserId(req){
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  return userId = payload._id;
}

module.exports = homeCtrl;
