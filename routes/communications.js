require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); 
const express =require("express");
const router=express.Router();

router.get('/sms/:id',(req,res)=>{
client.messages.create({
     body: `My Bot (message: ${req.params.id})`,
     from: process.env.TWILIO_PHONE_NUMBER,
     to: process.env.TWILIO_ENDUSER_NUMBER
   })
  .then(message =>{
    res.sendStatus(200);
     res.send(message.sid)
  }).catch(err=>{
    res.sendStatus(400);
    res.send(err)
  }  
    );

})
router.get('/call',(req,res)=>{
    client.calls
    .create({
       url: 'http://demo.twilio.com/docs/voice.xml',
       to: process.env.TWILIO_ENDUSER_NUMBER,
       from: process.env.TWILIO_PHONE_NUMBER,
     })
    .then(call => {
        res.sendStatus(200);
        res.send(call.sid)
    }).catch(err=>{
        res.sendStatus(400);
        res.send(err)
    });

})
module.exports = router;