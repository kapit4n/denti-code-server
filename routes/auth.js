var express = require('express');
var router = express.Router();

var authCtrl = require('../controllers/auth')

router.post('/login', authCtrl.login);

module.exports = router;
