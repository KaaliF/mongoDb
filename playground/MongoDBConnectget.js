//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{
if(err)
{
    return console.log('Unable to connect to MongoDb');
}
console.log('connected to Mongo');
db.collection('Users').find({_id: new ObjectID('5b5c576d3073a2ba4c365456')}).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
console.log("Error",err);
});


})
