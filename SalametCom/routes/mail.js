var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
var name=req.body.name;
var email2=req.body.email;
var phone= req.body.phone;
var message = req.body.message;
	var sg = require('sendgrid')('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');
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
        value: 'name:'+ name +'\n'+'message:'+ message + '\n' +'tel:' +phone 
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