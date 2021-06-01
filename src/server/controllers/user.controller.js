const User = require('../models/user');

const userCtrl = {};

const jwt = require('jsonwebtoken');

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) =>  {

  const { nombre, ciudad, pais, email, password} = req.body.user

  const newUser = new User({
    nombre,
    ciudad,
    pais,
    email,
    password
  });

  await newUser.save();

  const token = jwt.sign({_id: newUser._id}, 'PP_SecretKey');

  res.status(200).json({
    'status': 'User saved',
    newUser,
    token
  });

};

userCtrl.loginUser = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({email});

  if (!user) return res.status(401).send("The email doesn't exist");
  if (user.password !== password) return res.status(401).send("Wrong password");

  console.log('Usuario correcto')
  const token = jwt.sign({_id: user._id}, 'PP_SecretKey');

  res.status(200).json({
    token
  });
};

/**userCtrl.editUser = async (req, res) => {
  const user = {
    name: req.body.name,
    ciudad: req.body.ciudad,
    pais: req.body.pais
  }

  await User.findOneAndUpdate(req.params.email, {$set: user})

  res.json({
    'status': 'User updated'
  });
};*/

userCtrl.deleteUser = async (req, res) => {
  await User.findOneAndRemove(eq.params.email);

  res.json({
    'status': 'User deleted'
  });
};

userCtrl.getActividades = (req, res) => {
  verifyToken(req)
  res.json({
    'status': 'Autorizado a ver los datos'
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
  //return next();
}


module.exports = userCtrl;
