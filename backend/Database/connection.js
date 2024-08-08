const mongoose=require('mongoose');

const connectToDb=async()=>{

    try {
        const conn=await mongoose.connect(process.env.MONGODB_URI,{
            
            
            

        })
        console.log(`Database connected ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error.message)
        process.exit(1)
        
    }
}


module.exports=connectToDb