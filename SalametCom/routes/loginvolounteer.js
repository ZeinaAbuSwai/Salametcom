var express = require('express');
var router = express.Router();
var loginvolounteer = require('../models/volounteer');
router.get('/',checkvolounteer, function(req, res, next) {
  var user = req.session.user;
  console.log("im the volounteer + "+req.session.user);
  res.render('calender');
});

function checkvolounteer(req,res,next)
{
  if(!req.session.user)
  {
    res.redirect('/authVol/volounteer');
  }
  else
    next();
}

module.exports = router;
