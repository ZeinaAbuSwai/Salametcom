var express = require('express');
var router = express.Router();
var News = require('../models/news');

router.get('/',function(req, res, next) {   
  res.render('news', { page: 'news' });
});

router.post('/',function(req,res,next){
  var news=req.body.news;
  var date=req.body.date;
  var newNews= new News;
  newNews.news=news;
  newNews.date=date;
  console.log("------",newNews);
  newNews.save(function(err){
    if(err) throw err;
     console.log("adding new");
     res.redirect('/authVol/news');
   
    News.find({},function(err,data2){
      if(err) throw err;
      console.log("post new",data2);
      console.log("finished");
      res.render('index',{news:data2});
    }).sort({_id:-1}).limit(10);// last n enteries
  });

  });

 
module.exports = router;
