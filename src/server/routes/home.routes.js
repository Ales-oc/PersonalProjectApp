const { Router } = require('express');
const router = Router();

const homeCtrl = require('../controllers/home.controller')

router.post('/actividades/ingresar', homeCtrl.createAct)
router.post('/dahorrado/ingresar', homeCtrl.createDAhorrado)
router.post('/dganado/ingresar', homeCtrl.createDGanado)
router.post('/actividades/planner/ingresar', homeCtrl.createActOrg)
router.get('/actividades/hoy', homeCtrl.getActividadesHoy)
router.get('/actividades/semana', homeCtrl.getActividadesSemana)
router.get('/dinero/ganado/mes', homeCtrl.getDineroGanadoMes)
router.get('/dinero/ahorrado/mes', homeCtrl.getDineroAhorradoMes)
router.post('/actividades/planner', homeCtrl.getDatosPlanner)
router.put('/actividades/planner/realizadoChanged', homeCtrl.editRealizado)

module.exports = router;
