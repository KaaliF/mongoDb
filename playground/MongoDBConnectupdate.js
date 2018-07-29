//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{
if(err)
{
    return console.log('Unable to connect to MongoDb');
}
console.log('connected to Mongo');
db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5b5c576d3073a2ba4c365456')

},{
    $set :{
      name : "Shameer"
    }

},{
    returnOriginal:false
}).then((results)=>{
    
})


})
