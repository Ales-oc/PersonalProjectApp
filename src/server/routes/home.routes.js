const { Router } = require('express');
const router = Router();

const homeCtrl = require('../controllers/home.controller')

router.post('/actividades/ingresar', homeCtrl.createAct)
router.post('/dahorrado/ingresar', homeCtrl.createDAhorrado)
router.post('/dganado/ingresar', homeCtrl.createDGanado)
//router.get('/dganado/ingresar', homeCtrl.createDGanado)
router.get('/actividades/hoy', homeCtrl.getActividadesHoy)
router.get('/actividades/semana', homeCtrl.getActividadesSemana)

module.exports = router;
