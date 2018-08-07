var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/Mongoose');
var {user} = require('./models/User');
var app= express();
app.use(bodyParser.json());
app.post('/users',(req,res)=>{
  
       let use = new user({
       name: req.body.text
       });

       use.save().then((doc)=>{
      res.send(doc);
       },(e)=>{
       res.status(400).send(e);
       });
    });

   app.get('/users',(req,res)=>{
   user.find().then((docs)=>{
   res.send({docs});
   
   },(e)=>{
res.status(400).send(e);
   });

   });
app.get('/users/:id',(req,res)=>{
 var id = req.params.id;
 user.findById(id).then((usr)=>{
res.send(usr);
 },(e)=>{
res.status(400).send(e);
 })
});

app.delete('/users/:id',(req,res)=>{
    var id =req.params.id;
    user.findByIdAndRemove(id).then((usr)=>{
        res.send(usr);
    },(e)=>{
        res.status(400).send(e);
    })
})
app.listen(3000,()=>{
    console.log("started");
});