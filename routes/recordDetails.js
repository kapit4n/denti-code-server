var express = require('express');
var router = express.Router();

var recordDetailCtrl = require('../controllers/recordDetails')

/* GET records listing. */
router.get('/', recordDetailCtrl.list);
router.post('/', recordDetailCtrl.create);
router.put('/:id', recordDetailCtrl.update);
router.get('/:id', recordDetailCtrl.getById);
router.delete('/:id', recordDetailCtrl.delete);

module.exports = router;
