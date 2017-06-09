var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
//var Volounteer = require('../models/volounteer');
//var Loginvolounteer = require('../models/loginvolounteer');
//3shan yro7 lsf7t el login
router.get('/login',checkAdmin, function(req, res, next) {
  res.render('login', { page: 'login' });
});
/*
//3shan yro7 lsf7t el volounteer
router.get('/loginvolounteer',checkvolounteer,function(req, res, next) {
  res.render('loginvolounteer', { page: 'loginvolounteer' });
});
//3shan yro7 lsf7t el register volounteer
router.get('/login/volounteer', function(req, res, next) {
  res.render('volounteer', { page: 'volounteer' });
});
*/
  //checking the name input with the password ing the DB
  //and if the password correct=>login
router.post('/login', function(req, res, next) {
  console.log(req.body);


  Admin.findOne({"user" : req.body.user},function(err,user){
      console.log("im here");
      if (err) throw err
      if(!user){
        res.render('login',{error:'المستخدم غير موجود'});


      }
      else
      {
        if(req.body.pass === user.password)
        {
          var user2= user.user;
          console.log(user2);
          req.session.user=user;
          res.redirect('/admin');
        }
        else
          res.render('login',{error:'كلمة المرور غير صحيحة'});

      }
    });
    });
  
/*
router.post('/loginvolounteer', function(req, res, next) {
  console.log(req.body);

  Volounteer.findOne({"user" : req.body.user},function(err,vol){
    console.log("im the volunteer");
    if (err) throw err
    if(!user){
      res.render('loginvolounteer',{error:'المستخدم غير موجود'});


    }
    else
    {
      if(req.body.pass === vol.password)
      {
        var user2= vol.user;
        console.log(user2);
        req.session.User=user;
        res.redirect('/calender');
      }
      else
        res.render('loginvolounteer',{error:'كلمة المرور غير صحيحة'});

    }
  });
  });
 


//registering a new volunteer
/*router.post('/volounteer', function(req, res, next) {
  console.log(req.body);

  Volounteer.findOne({"user" : req.body.user},function(err,vol){
  	console.log("im here");
  	if (err) throw err
  });
  });
 
*/

router.post('/logout', function(req, res, next) {
  console.log("im in logout route");
  delete req.session.user;
  res.redirect('/');
});


function checkAdmin(req,res,next)
{
  if(req.session.user)
  {
    res.redirect('/admin');
  }
   
  
  else
    next();
}
/*
function checkvolounteer(req,res,next)
{
  if(req.session.user)
  {
    res.redirect('/calender');
  }
   
  
  else
    next();
}

*/
module.exports = router;
