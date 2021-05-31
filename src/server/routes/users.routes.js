const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller')

router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.get('/login', userCtrl.getUser);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;
