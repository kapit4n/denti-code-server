var express = require('express');
var router = express.Router();

var patientCtrl = require('../controllers/patients')

/* GET users listing. */
router.get('/', patientCtrl.list);
router.post('/', patientCtrl.create);
router.put('/:id', patientCtrl.update);
router.get('/:id', patientCtrl.getById);
router.delete('/:id', patientCtrl.delete);

module.exports = router;
