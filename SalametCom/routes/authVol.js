var express = require('express');
var router = express.Router();

var Volounteer = require('../models/volounteer');


//3shan yro7 lsf7t el volounteer
router.get('/loginvolounteer',checkvolounteer,function(req, res, next) {
  res.render('loginvolounteer', { page: 'loginvolounteer' });
});


//checking the name input with the password ing the DB
  //and if the password correct=>login
router.post('/loginVolounteer',function(req,res,next){
  console.log(req.body);


  Volounteer.findOne({"user" : req.body.user},function(err,user){
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
            res.redirect('/loginvolounteer');
          }
          else
            res.render('loginvolounteer',{error:'كلمة المرور غير صحيحة'});

        }
      });
      });


//3shan yro7 lsf7t el register volounteer
router.get('/login/volounteer', function(req, res, next) {
  res.render('volounteer', { page: 'volounteer' });
});

 


router.post('/logout', function(req, res, next) {
  console.log("im in logout route");
  delete req.session.user;
  res.redirect('/');
});



function checkvolounteer(req,res,next)
{
  if(req.session.user)
  {
    res.redirect('/calendar');
  }
   
  
  else
    next();
}


module.exports = router;
