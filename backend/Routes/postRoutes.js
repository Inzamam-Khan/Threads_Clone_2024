const express=require('express');
const { createPost, getPosts, getPostById, deletePostById, likeUnlikePost, replyToPost, replyToComment } = require('../Controllers/Post.controllers');
const protectRoutes=require('../Middlewares/protectRoutes.js')

const postRoutes=express.Router()

// create post 
postRoutes.post('/create',protectRoutes,createPost)

// get all posts 
postRoutes.get('/',protectRoutes,getPosts)

// get particular post by /:id
postRoutes.get('/:id',protectRoutes,getPostById)

// delelte particular post by /:id
postRoutes.delete('/:id',protectRoutes,deletePostById)

// like or unlike post having id /:postId
postRoutes.post('/likes/:postId',protectRoutes,likeUnlikePost)

postRoutes.post('/reply/:postId',protectRoutes,replyToPost)

// postRoutes.post('/reply/:postId/:commentId',protectRoutes,replyToComment)


module.exports=postRoutes