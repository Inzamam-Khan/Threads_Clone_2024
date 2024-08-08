const User=require('../Models/userModel.js')
const Post =require('../Models/postModel.js')

const createPost=async(req,res)=>{

    try {
        const {createdBy,caption,image}=req.body;
        if(!createdBy || !caption){
            return res.status(400).json({error:'Fields Required'})
        }

        const user=await User.findById(createdBy)
        if(!user) return res.status(404).json({error:'User Not found!'})

        if(req.user._id.toString() != user._id.toString()) return res.status(401).json({error:'Unauthorized to create Post'})


        const post = await Post.create({createdBy,caption,image})

        await User.updateOne({_id:user._id},{$push:{posts:post._id}})

        return res.status(201).json({message:'post created successfully',post})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message)
        
    }
   

}


const getPosts=async(req,res)=>{
    try {
        
        const authUser=await User.findById({_id:req.user._id})
        const post =await Post.find({createdBy:{ $in:authUser.following}}).sort({createdAt:-1})


        
    
    return res.status(200).json(post)
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message)
        
    }
    
}


const getPostById=async(req,res)=>{
    const {id}=req.params;
    const post =await Post.findById(id).populate('createdBy')
    console.log(post)
    return res.json(post)

}

const deletePostById=async(req,res)=>{
    const {id}=req.params;

    
    
    const post=await Post.findOne({_id:id})
    console.log(post)
    if(post.createdBy.toString() != req.user._id.toString()) return res.status(401).json({error:'Unauthorized Request!'})

    await Post.deleteOne({_id:id})
    
    return res.json({message:"Post Deleted successfully"})

}


const likeUnlikePost=async(req,res)=>{
    const {postId}=req.params;

    try {
        const post=await Post.findById(postId)
        if(!post) return res.status(404).json("Post not found!")
    
        let isLiked=post.likes.includes(req.user._id.toString())
        if(isLiked){
            // unlike case:
           const result= await Post.findByIdAndUpdate({_id:postId},{ $pull:{likes:req.user._id}},{new:true})
           console.log(result)
           return res.status(201).json({message:"Post Unliked"})
            
        }
        else{
            // like case:
    
            const result=await Post.findByIdAndUpdate({_id:postId},{ $push:{likes:req.user._id}},{new:true})
            console.log(result)
            return res.status(201).json({message:"Post Liked"})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(401).json(error.message)
        
    }
   
}



const replyToPost=async(req,res)=>{
    const {text}=req.body
    const {postId}=req.params;
    const authUser=await User.findOne({_id:req.user._id.toString()})

    const reply={
        userId:authUser._id.toString(),
        text,
        userProfilePic:authUser.profilePicURL,
        userName:authUser.userName
    }
    const post=await Post.findByIdAndUpdate({_id:postId},{ $push:{replies:reply}},{new:true})



    console.log(post)
    return res.status(201).json({messge:'Replied'})

}

// const replyToComment=async(req,res)=>{
//     const {text}=req.body
//     const {postId,commentId}=req.params

//     const authUser=await User.findOne({_id:req.user._id.toString()})

//     const post =await Post.findById({_id:postId})

//     const replyBack={
//         userId:authUser._id.toString(),
//         text,
//         userProfilePic:authUser.profilePicURL,
//         userName:authUser.userName

//     }
    
//     const result=post.replies.filter((item)=>item._id.toString() === commentId)
//     result.repliedBackBy.push(replyBack)




//     await Post.findOne({replies.:postId},{replies.repliedBackBy},{new:true})





        

    
//     console.log(result)
//     return res.status(200).json('replied to comment success')
// }















module.exports={
    createPost,
    getPosts,getPostById,
    deletePostById,likeUnlikePost,replyToPost,
    
}