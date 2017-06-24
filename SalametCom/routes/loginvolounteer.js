var express = require('express');
var router = express.Router();
var loginvolounteer = require('../models/registar');
router.get('/',checkvolunteer, function(req, res, next) {
  var user = req.session.user;
  console.log("im the volunteer + "+req.session.user);
  //res.render('PageOfVolunteer',{ page: 'PageOfVolunteer' });
  res.render('calendar');
});

function checkvolunteer(req,res,next)
{
  if(!req.session.user)
  {
    res.redirect('/authVol/registar');
  }
  else
    next();
}

module.exports = router;
