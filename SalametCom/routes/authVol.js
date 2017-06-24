var express = require('express');
var router = express.Router();
var registar = require('../models/registar');

//3shan yro7 lsf7t el volunteer
router.get('/loginvolounteer',checkvolunteer,function(req, res, next) {
  res.render('loginvolounteer', { page: 'loginvolounteer' });
});

router.get('/list',function(req,res,next){
  console.log('list');

  registar.find({},function(err,data2){
      if(err) throw err;
      console.log("list",data2);
      console.log("finished");
      res.render('list',{list:data2});
    }).sort({_id:-1}).limit(100);// last n enteries

  

 });

//checking the name input with the password ing the DB
  //and if the password correct=>login
router.post('/loginVolounteer',function(req,res,next){
  console.log(req.body);

  registar.findOne({"user" : req.body.user},function(err,user){
      console.log("im the volounteer");
        if (err) throw err
        if(!user){
          res.render('loginvolounteer',{error:'المستخدم غير موجود'});
        }
        else
        {
          if(req.body.pass === user.password)
          {
            req.session.user=user;
            res.redirect('/PageOfVolunteer');
          }
          else
            res.render('loginvolounteer',{error:'كلمة المرور غير صحيحة'});
        }
      });
      });

//3shan yro7 lsf7t el register volounteer
router.get('/login/registar', function(req, res, next) {
  res.render('registar', { page: 'registar' });
});

router.post('/logout', function(req, res, next) {
  console.log("im in logout route");
  delete req.session.user;
  res.redirect('/');
});

router.get('/logout', function(req, res, next) {
  console.log("im in logout route");
  delete req.session.user;
  res.redirect('/');
});
function checkvolunteer(req,res,next)
{
  if(req.session.user)
  {
    res.redirect('../');
  }
    
  else
    next();
}

module.exports = router;
