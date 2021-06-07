const Actividad = require('../models/actividades');
const ActividadPlan = require('../models/actPlanificador');
const DineroAhorrado = require('../models/dineroAhorrado');
const DineroGanado = require('../models/dineroGanado');

const homeCtrl = {};

const jwt = require('jsonwebtoken');
const { json } = require('express');

homeCtrl.getActividadesHoy = async (req, res) => {
  verifyToken(req)

  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUser = payload._id;

  const aggregate = await Actividad.aggregate([
    {
      $match:{ idUsuario: idUser }
    },
    {
      $match: {
        createdAt: {
          $gte:   new Date(new Date().setHours(00,00,00)) ,
          $lt :  new Date(new Date().setHours(23,59,59))
        }
      }
    },
    {
      $group:{
        _id:"$tipo",
        tiempoTotal:{
          $sum:"$tiempoDedicado"
        }
      }
    },
    {
      $sort:{
          _id:1
      }
    },
    {
      $project:{
        _id:1,
        tiempoTotal:1
      }
    }
  ])

  res.json({
    'status':'200',
    aggregate
  })
}

homeCtrl.getActividadesSemana = async (req, res) => {
  verifyToken(req)

  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUser = payload._id;

  const aggregate = await Actividad.aggregate([

    {
      $match:{ idUsuario: idUser }
    },
    {
      $match: {
        createdAt: {$gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)}
      }
    },
    {
      $group:{
        _id: {
          "dia": {$dayOfMonth: "$createdAt"},
          "tipo":"$tipo"
        },
        tiempoTotal:{
          $sum:"$tiempoDedicado"
        },
        fechaIngreso:
          {$addToSet: "$createdAt"}
      }
    },
    {
      $sort:{
        fechaIngreso:1
      }
    },
    {
      $project:{
        fechaIngreso:1,
        _id:1,
        tiempoTotal:1
      }
    }
  ])

  res.json({
    'status':'200',
    aggregate
  })
}

homeCtrl.getDineroGanadoMes = async (req, res) => {
  verifyToken(req)

  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUser = payload._id;

  const aggregate = await DineroGanado.aggregate([

    {
      $match:{ idUsuario: idUser }
    },
    {
      $group:{
        _id:"$mes",
        dineroTotal:{
          $sum:"$total"
        }
      }
    },
    {
      $sort:{
        _id:1
      }
    },
    {
      $project:{
        _id:1,
        dineroTotal:1
      }
    }
  ])

  res.json({
    'status':'200',
    aggregate
  })
}

homeCtrl.getDineroAhorradoMes = async (req, res) => {
  verifyToken(req)

  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUser = payload._id;

  const aggregate = await DineroAhorrado.aggregate([

    {
      $match:{ idUsuario: idUser }
    },
    {
      $group:{
        _id:"$mes",
        dineroTotal:{
          $sum:"$total"
        }
      }
    },
    {
      $sort:{
        _id:1
      }
    },
    {
      $project:{
        _id:1,
        dineroTotal:1
      }
    }
  ])

  res.json({
    'status':'200',
    aggregate
  })
}

homeCtrl.getDatosPlanner = async (req, res) => {
  verifyToken(req)

  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUser = payload._id;

  const { fechaIngreso } = req.body;

  const aggregate = await ActividadPlan.aggregate([

    {
      $match:{ idUsuario: idUser }
    },
    {
      $match:{fechaIngreso: fechaIngreso}
    },
    {
      $sort:{
        numero:1
      }
    },
    {
      $project:{
        numero:1,
        tipo:1,
        desc:1,
        tiempoAprox:1,
        realizado:1,
      }
    }
  ])

  res.json({
    'status':'200',
    aggregate
  })
}


homeCtrl.createActOrg = async (req, res) => {

  const { numero, tipo, desc, tiempoAprox, realizado, fechaIngreso } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUsuario = payload._id;

  const newActividadPlan = new ActividadPlan({
    numero,
    tipo,
    desc,
    tiempoAprox,
    realizado,
    fechaIngreso,
    idUsuario
  });

  await newActividadPlan.save();

  console.log(req.body);

  res.status(200).json({
    'status': 'Act saved',
    newActividadPlan
  });

};

homeCtrl.editRealizado = async (req, res) => {

  const { numero, realizado, fechaIngreso } = req.body;

  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUsuario = payload._id;

  await ActividadPlan.findOneAndUpdate({idUsuario: idUsuario, numero: numero, fechaIngreso: fechaIngreso}, {$set: {realizado: realizado}}, {returnOriginal:false})

  console.log(req.body);

  res.status(200).json({
    'status': '"Realizado" field changed',
  });

};


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

homeCtrl.createDAhorrado = async (req, res) =>  {

  const { mes, total } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUsuario = payload._id;

  const newAhorrado = new DineroAhorrado({
    total,
    mes,
    idUsuario
  });

  await newAhorrado.save();

  console.log(req.body);

  res.status(200).json({
    'status': 'Ahorr saved',
    newAhorrado
  });
};

homeCtrl.createDGanado = async (req, res) =>  {

  const { mes, total } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'PP_SecretKey');
  const idUsuario = payload._id;

  const newGanado = new DineroGanado({
    total,
    mes,
    idUsuario
  });

  await newGanado.save();

  console.log(req.body);

  res.status(200).json({
    'status': 'Ganado saved',
    newGanado
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
