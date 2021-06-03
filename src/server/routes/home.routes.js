const { Router } = require('express');
const router = Router();

const homeCtrl = require('../controllers/home.controller')

router.get('/actividades/hoy', homeCtrl.getActividadesHoy)

module.exports = router;
