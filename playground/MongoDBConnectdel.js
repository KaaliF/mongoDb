//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{
if(err)
{
    return console.log('Unable to connect to MongoDb');
}
console.log('connected to Mongo');
// delete many
/*db.collection('Users').deleteMany({name : 'Farhan'}).then((results)=>{
console.log(results);
},(err)=>{
    console.log(err);
})*/

db.collection('Users').findOneAndDelete({_id : new ObjectID('5b5d65ec3073a2ba4c3656eb')}).then((results)=>{
    console.log(results);
},(err)=>{})


})
