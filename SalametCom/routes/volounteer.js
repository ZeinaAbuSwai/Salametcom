var express = require('express');
var router = express.Router();
var Volounteer = require('../models/volounteer');
router.post('/', function(req, res, next) {

  var user = req.body.user;
  var password = req.body.password;
  var email = req.body.email;
  var place = req.body.place;
  var phone = req.body.phone;
  var vol = new Volounteer;
  vol.user=user;
  vol.password= password;
  vol.email = email;
  vol.place= place;
  vol.phone = phone;
  vol.save(function(err){
    if(err) throw err;
    res.redirect('../');

  })
  console.log("Regestring..");
 // res.render('admin');
 function checkVolounteer(req,res,next)
{
  if(!req.session.user)
  {
    res.redirect('/authVol/login/volounteer');
  }
  else
    next();
}
});

module.exports = router;
