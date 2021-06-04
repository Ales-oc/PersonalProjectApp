const { Router } = require('express');
const router = Router();

const homeCtrl = require('../controllers/home.controller')

router.get('/actividades/hoy', homeCtrl.getActividadesHoy)
router.post('/actividades/ingresar', homeCtrl.createAct)
router.post('/dahorrado/ingresar', homeCtrl.createAct)

module.exports = router;
