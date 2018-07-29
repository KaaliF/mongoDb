var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Users');

var user = mongoose.model('user',{
text:{
    type: String
},
completed:{
type : Boolean
},
completedAt: {
    type: Number
}

});

var newUser = new user({
text : 'Cook dinner',
completed : true,
completedAt : 123

});

newUser.save().then((res)=>{
console.log('Saved',res);
},(err)=>{

})