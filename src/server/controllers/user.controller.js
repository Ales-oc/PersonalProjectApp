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

  res.json({
    'status': 'User saved'
  });

  const token = jwt.sign({_id: newUser._id}, 'PP_SecretKey');

  res.status(200).json({
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
  console.log(token)
};

userCtrl.editUser = async (req, res) => {
  const user = {
    name: req.body.name,
    ciudad: req.body.ciudad,
    pais: req.body.pais
  }

  await User.findOneAndUpdate(req.params.email, {$set: user})

  res.json({
    'status': 'User updated'
  });
};

userCtrl.deleteUser = async (req, res) => {
  await User.findOneAndRemove(eq.params.email);

  res.json({
    'status': 'User deleted'
  });
};


module.exports = userCtrl;
