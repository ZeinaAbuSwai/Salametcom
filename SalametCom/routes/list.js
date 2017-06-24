var express = require('express');
var router = express.Router();
var registar = require('../models/registar');

router.get('/', function(req, res, next) {
  res.render('list', { page: 'list' });
});


  

 
module.exports = router;