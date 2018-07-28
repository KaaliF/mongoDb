const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{
if(err)
{
    return console.log('Unable to connect to MongoDb');
}
console.log('connected to Mongo');
db.collection('Users').insertOne({
    name: 'Farhan',
    age :23,
    location :'Lahore'
},(err,result)=>{
    if(err)
    return console.log('Unable to insert',err);
console.log(result);
})
db.close();
});

