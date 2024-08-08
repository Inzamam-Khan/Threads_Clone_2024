const mongoose=require('mongoose')
const {randomBytes,createHmac,}=require('crypto');
const { validateToken, createToken } = require('../JWT/jwt');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    salt:{
        type:String,
        default:""
    },
    profilePicURL:{
        type:String,
        default:""
    },
    followers:{
        type:[String],
        default:[]
    },
    following:{
        type:[String],
        default:[]
    },
    posts:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Post',
        default:[]
    },
    bio:{
        type:String,
        default:""
    }
    
    
},{timestamps:true})




userSchema.pre("save",function(next){
    const user=this; //current user being saved...
    const salt=randomBytes(16).toString();
    const hashedPassword=createHmac('sha256',salt).update(user.password).digest('hex')
      user.salt=salt;
      user.password=hashedPassword;

      next()    // pass the control to next function 
})



userSchema.static('matchPassword',async function(userName,password){
    const user=await this.findOne({userName})
    if(!user) throw new Error('User Not Found!')

    try {
        const salt =user.salt;
        const dbHashedPassword=user.password;

        const newHashedPassword=createHmac('sha256',salt).update(password).digest('hex');

        if(dbHashedPassword != newHashedPassword) {

            throw new Error('Invalid Credentials')
            
        }
        
        else{
            const token=createToken(user)
            return {user,token};

        }
           

        
    } catch (error) {
        
        return {error:error.message}
        
    }
})



userSchema.static('updatePassword',async function(payload,id){
    console.log(id)
    
    const {userName,password}=payload
    const user=await this.findOne(id)
    
    
    if(!user) return res.status(404).json({error:'User not found...'})
    
    try {
        const salt=randomBytes(16).toString();
        const dbHashedPassword=createHmac('sha256',salt).update(password).digest('hex');

        await User.findByIdAndUpdate({_id:user._id.toString()},{

            salt:salt,
            password:dbHashedPassword
        },{new:true})
        
        
    } catch (error) {
        console.log(error);
        return res.status(401).json(error.message)
        
    }
})


const User=mongoose.model('User',userSchema)


module.exports=User