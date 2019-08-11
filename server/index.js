require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const nodemailer = require('nodemailer');

// const creds = require("./config.js");
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(pino);
// to allow backend to accept CORS request from any origin or headers
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', (req, res) => {
  res.render('index');
})
// Function to send message from Contact Form 
app.post('/send', (req, res) => {
            console.log(req.body.userData.email);

  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.userData.email, 
        to: process.env.EMAIL, 
        subject: req.body.userData.subject, 
        html: 'From: ' + req.body.userData.email + '<br/><br/>' + req.body.userData.message, 
        // html: '<b>From my website</b>'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        return res.json();
        
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});