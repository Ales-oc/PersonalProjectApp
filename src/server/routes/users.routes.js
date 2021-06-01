const { Router } = require('express');
const router = Router();

const userCtrl = require('../controllers/user.controller')

router.get('/users', userCtrl.getUsers);
router.get('/actividades', userCtrl.getActividades);
router.get('/finanzas', userCtrl.getUsers);
router.post('/register', userCtrl.createUser);
router.post('/login', userCtrl.loginUser);
//router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;
