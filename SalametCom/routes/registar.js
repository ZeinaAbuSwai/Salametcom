var express = require('express');
var router = express.Router();
var registar = require('../models/registar');
router.post('/', function(req, res, next) {

  var user = req.body.user;
  var password = req.body.password;
  var email = req.body.email;
  var place = req.body.place;
  var phone = req.body.phone;
  var vol = new registar;
  vol.user=user;
  vol.password= password;
  vol.email = email;
  vol.place= place;
  vol.phone = phone;

  vol.save(function(err){
    if(err) throw err;
      res.redirect('/');
  })
  console.log("Regestring..");




 function checkVolunteer(req,res,next)
{
  if(!req.session.user)
  {
    res.redirect('../');
  }
  else
    next();
}
});

module.exports = router;
