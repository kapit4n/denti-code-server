var express = require('express');
var router = express.Router();

var appointmentCtrl = require('../controllers/appointments')

/* GET records listing. */
router.get('/', appointmentCtrl.list);
router.post('/', appointmentCtrl.create);
router.put('/:id', appointmentCtrl.update);
router.get('/:id', appointmentCtrl.getById);
router.delete('/:id', appointmentCtrl.delete);

module.exports = router;
