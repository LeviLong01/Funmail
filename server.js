const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7000;
var nodemailer = require('nodemailer');
const randomWords = require('random-words');
var fs = require('fs');
var imgGen = require('js-image-generator');
var i = 10;

setInterval(function() {
	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'theaaronhobgoodtest@gmail.com',
	    pass: 'lzudctgsermplnvd'
	  }
	})

	var sentence = randomWords({min: 8, max: 12}).join(" ");

	var mailOptions = {
	  from: 'theaaronhobgoodtest@gmail.com',
	  to: 'levi_long@chs.net',
	  subject: 'This is the Aaron Test',
	  text: "The Aaron test is compromised of indefinite segments.\nEach minute a new sentence will be produced. This is the subconcious of Aaron's mind.\n\n" + sentence,
	 /* text: imgGen.generateImage(800, 600, 80, function(err,image) {
	  	fs.writeFileSync('TheAaronTest.jpg', image.data)
	  })*/
	}

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
	i *= 2;
}, 20 * 1000);

app.listen(port, () => {
	console.log("We are live on " + port);
});