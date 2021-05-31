const User = require('../models/user');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) =>  {
  console.log(req.body);
  await user.save();
  res.json({
    'status': 'User saved'
  });
};

userCtrl.getUser = async (req, res) => {
  const user = await User.findOne(req.body.email);

  res.json(user);
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
