const mongoose = require('mongoose');

const postSchema =  mongoose.Schema({    
    post : {
       type : String ,
       required : true
    }
});

const Post =  mongoose.model('post' , postSchema );

module.exports = Post    