var mongoose = require('mongoose');

const user = mongoose.model('Users',{
    name:{
        type: String,
        required: true,
        minlength:1,
        trim:true
    
    }
  
    
    });

    module.exports ={user};