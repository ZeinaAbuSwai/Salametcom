var express = require('express');
var router = express.Router();
var News = require('../models/news');
/* GET home page. */
router.get('/',checkLogin, function(req, res, next) {
  News.find({},function(err,data2){
      if(err) throw err;
      console.log("no auth");
      res.render('index',{auth:'no',page: 'home',news:data2});
    }).sort({_id:-1}).limit(10);// last n enteries
});

function checkLogin(req,res,next)
{
  if(!req.session.user)
   {
      News.find({},function(err,data2){
        if(err) throw err;
        res.render('index',{auth:'no',page: 'home',news:data2});
      }).sort({_id:-1}).limit(10);// last n enteries
    }
  else
  {    
    	News.find({},function(err,data2){
	      if(err) throw err;
	      res.render('index',{auth:'yes',page: 'home',news:data2});
	    }).sort({_id:-1}).limit(10);// last n enteries
  }
    
}



module.exports = router;
