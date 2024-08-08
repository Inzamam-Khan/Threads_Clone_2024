const express=require('express');
const { signupUser, loginUser, logoutUser, followUnfollowUser, updateUser, getUserProfile, getUserProfileByUserName } = require('../Controllers/User.controller.js');
const protectRoutes = require('../Middlewares/protectRoutes.js');


const userRoutes=express.Router();

userRoutes.get('/userProfile/:userName',getUserProfileByUserName)

userRoutes.post('/signup',signupUser)
userRoutes.post('/login',loginUser)
userRoutes.post('/logout',logoutUser)

userRoutes.post('/follow/:id',protectRoutes,followUnfollowUser)

userRoutes.post('/update/:id',protectRoutes,updateUser)





module.exports=userRoutes