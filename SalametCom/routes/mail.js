var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
var name=req.body.name;
var email2=req.body.email;
var phone= req.body.phone;
var message = req.body.message;

//=> 'unicorn<br>\nrainbow' 
  var sg = require('sendgrid')('');
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [
      {
        to: [
          {
            email: 'fuadsami5@gmail.com'
          }
        ],
        subject: 'رسالة من ' + name
      }
    ],
    from: {
      email: email2

    },
    content: [
      {
        type: 'text/plain',

        value: 'name:'+ name +'\n\n'+'message:'+ message + '\n\n' +'tel:' +phone 
      }
    ]
  }
});
sg.API(request, function (error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log('suceess sent');
});

  res.redirect('/');
});

module.exports = router;