var express = require('express');
var router = express.Router();

// DataBase 
var mongoose = require('mongoose');
var Event = null;
var db = mongoose.connection;
console.log("creart connection ");
db.on('error', console.error.bind(console, 'connection error:'));
console.log("bind connection ");

db.once('open', function () {
  console.log("open connection ");
  // we're connected!
  console.log(">>>> We are connected.");

  // -- begin definitions
  var Schema = mongoose.Schema;
  var eventSchema = new Schema({
    id: Number,
    title: String,
    url: String,
    class: String,
    start: Number,
    end: Number,
    details: String
  });

  console.log("get all event ");
  eventSchema.methods.getAllEvents = function (callback) {
    return this.model('Event').find({}, callback);
  };

  eventSchema.methods.getEvent = function (event_id, callback) {
    return this.model('Event').find({id: event_id}, callback);
  };

  Event = mongoose.model('Event', eventSchema);

  // -- end definitions
  console.log(">>>> 12 ");
}); // -- end db.once('open')

console.log(">>>> 6 ");
console.log(">>>> 7 ");

// when we want to view the form, it is a GET request
router.get('/add', function (req, res, next) {
  res.render('event-add', {page: 'event-add'});
});

// when we submit the form, it is a POST request
router.post('/add', function (req, res, next) {

  // TODO: handle submit form by inserting data into DataBase
  // ...
  console.log("--");
  console.log("--");
  console.log("--");
  console.log("Handling submit of Add Event: ");
  
  var title = req.body.title;
  var _class = req.body.class;
  var start = req.body.start;
  var end = req.body.end;
  var details = req.body.details;
  var id = req.body.id ;
  
  var addEvent = new Event;
  addEvent.id = 7 ;
  addEvent.title = title;
  addEvent.end = end;
  addEvent.start = start;
  addEvent.details = details;
  addEvent.class = _class;

  addEvent.save(function(err){
    if(err) throw err;
      res.render('calendar', {page: 'calendar'});
  })
  console.log("Event properties: ", addEvent);
  console.log("--");
  console.log("--");
  console.log("--");
  
});
  



// TODO: get url query parameter id=###
router.get('/:id', function (req, res, next) {
  // TODO: get event information from mongoose
  // ...
  var event_id = req.params.id;
  console.log("#### ################# Event ID: ", event_id);

  var event = new Event().getEvent(event_id, function (err, event) {

  console.log("Rendering event: ", event);

  // show HTML page with event information
    res.render('event', { event: event});
    
    res.end();
    console.log(">>>> 10 ");

  });


});

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("HOME PAGE ");
  // res.render('index', { page: 'home' });

  //mongoose.connect('mongodb://salametkom:salametkom1234@ds141401.mlab.com:41401/fuadsalamet');



  // -- begin get all events
  var event = new Event().getAllEvents(function (err, events) {
    console.log("all the event ");
    console.log(">>>> Events are: ", events);
    console.log("that's it !");
    res.json({
      "success": 1,
      "result": events
    });
    res.end();
    console.log("end bind ");

  });
  // -- end get all events

  // res.end("");
  console.log("end connection ");
});



module.exports = router;