var express = require('express');
var router = express.Router();

var recordTypeCtrl = require('../controllers/recordTypes')

/* GET recordTypes listing. */
router.get('/', recordTypeCtrl.list);
router.post('/', recordTypeCtrl.create);
router.put('/:id', recordTypeCtrl.update);
router.get('/:id', recordTypeCtrl.getById);
router.delete('/:id', recordTypeCtrl.delete);

module.exports = router;
