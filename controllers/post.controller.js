const mongoose = require('mongoose');
const Post = require('../models/post.model');




exports.getPosts = async (req,res,next)=>{
    try{
        const posts = await Post.find({});
        res.render('index' , {
             posts : posts
            })
    }catch(err){
        console.log(err)
    }

}


exports.postToDO =   (req ,res,next)=>{
    
    const post = req.body;
    const newPost =  new Post(post);
     newPost.save().then(()=>{
        res.redirect('/')
     }).catch(err=>{
         console.log(err)
         res.redirect('/')
     })
     
}

exports.deletePost = (req,res,next)=>{
    const id = req.params.id;
    Post.findByIdAndDelete(id).then(()=>{
        res.redirect('/')
    }).catch(err=>{
        console.log(err)
        res.redirect('/')
    })
}