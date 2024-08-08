const mongoose=require('mongoose')



const postSchema=new mongoose.Schema({

        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        caption:{
            type:String,
            maxLength:500
        },
        image:{
            type:String,
        },
        likes:{
            type:[mongoose.Schema.Types.ObjectId],
            ref:"User",
            default:[]
        },
        replies:[
            {

            userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true},

            text:{
                type:String,
                required:true,
            },

            userProfilePic:{
                type:String,
            },

            userName:{
                type:String
                
            },
            repliedBackBy:[
                {
                    userId:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:'User',required:true
                    },
                    text:{
                        type:String,required:true,
                    },
                    userProfilePic:{
                        type:String,
                    },
                    userName:{
                        type:String
                    }
                }
            ]
              
            
        }
    ]


},{timestamps:true})



const Post=mongoose.model("Posts",postSchema)


module.exports=Post