var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var app = express();

var index = require('./routes/index');
var auth = require('./routes/auth');
var authVol = require('./routes/authVol');
var users = require('./routes/users');
var admin = require('./routes/admin');
var loginvolounteer = require('./routes/loginvolounteer');
var calender = require('./routes/calender');
var mail = require('./routes/mail');
var volounteer = require('./routes/volounteer');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// DataBase 
var mongoose = require('mongoose');
mongoose.connect('mongodb://salametkom:salametkom1234@ds141401.mlab.com:41401/fuadsalamet');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// session 
app.use(session({
  secret: "secret",
  saveUninitialized: true,
  resave: true
}));

app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);
app.use('/authVol', authVol);
app.use('/admin', admin);
app.use('/mail', mail);
app.use('/calender', calender);
//app.use('/auth/login/volounteer', volounteer);
app.use('/volounteer', volounteer);
app.use('/loginvolounteer', loginvolounteer);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



