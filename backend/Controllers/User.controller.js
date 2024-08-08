const { createToken } = require('../JWT/jwt.js');
const User = require('../Models/userModel.js')

const signupUser = async (req, res) => {

    try {
        const { name, email, userName, password } = req.body;
        const user = await User.findOne({ userName })

        if (user) return res.status(400).json({ error: 'User Already Exists!' })

        if (!user) {
            const user = await User.create({ name, email, userName, password, })

            const token = createToken(user)
            res.cookie('token', token, { httpOnly: true, maxAge: 15 * 24 * 60 * 60 * 1000, sameSite: "strict" })
            return res.status(200).json(user)
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })

    }






}



const loginUser = async (req, res) => {
    try {

        const { userName, password } = req.body;
        const { token = '', user = null, error = null } = await User.matchPassword(userName, password)

        if (error) {

            throw new Error(error)
        }
        else {
            res.cookie('token', token)
            return res.status(200).json(user)
        }




    } catch (error) {
        console.log(error.message)
        return res.json(error.message)

    }


}



const logoutUser = (req, res) => {
    try {

        res.cookie('token', null, { maxAge: 0 })
        return res.status(200).send('Logout User...')

    } catch (error) {
        return error.message;

    }

}

const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params;

        const userToModify = await User.findOne({ _id: id })

        const authUser = await User.findOne(req.user._id)




        if (userToModify._id.toString() === authUser._id.toString()) return res.status(400).json({ error: 'you cannot follow/unfollow yourself' })

        if (!userToModify || !authUser) return res.status(400).json({ error: 'Invalid Operation' })


        const isFollowing = authUser.following.includes(id)


        if (isFollowing) {
            // unfollow case:
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } })
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } })
            res.status(200).json({ message: 'unfollow sucess' })
        }
        else {
            // follow case
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } })
            res.status(200).json({ message: 'follow sucess' })

        }



    } catch (error) {
        console.log(error)
        return res.status(401).json(error)
    }

}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, userName, password, profilePicURL, bio } = req.body;
    

    try {

        const authUser = await User.findOne(req.user._id)
        
        if (!authUser) return res.status(400).json({ error: 'User Not found!' })

        if (id != req.user._id.toString()) return res.status(400).json({ error: "you cannnot update other user's profile" })

        if (password) {
            await User.updatePassword(req.body,req.user._id);
            return res.status(200).json({ message: 'Password updated!' })

        }
        else {
            const result = await User.findByIdAndUpdate({_id:authUser._id.toString()}, {$set:{
                name: name || authUser.name,
                email: email || authUser.email,
                userName: userName || authUser.userName,
                profilePicURL:profilePicURL ||  authUser.profilePicURL,
                bio:bio || authUser.bio 
            }},{new:true});
            
            return res.status(200).json({ 
                message:'Profile Udated',
                result:result })

        }




    } catch (error) {
        console.log(error)
        return res.status(400).json(error)

    }


}


const getUserProfileByUserName=async(req,res)=>{
    const {userName}=req.params
    try {
        const user=await User.findOne({userName}).select(["-password","-updatedAt","-salt"])
        if(!user) return res.status(404).json({error:'User Not found'})
        console.log(user)
        return res.status(200).json(user)
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message)
        
    }

}


module.exports = {
    signupUser, loginUser,
    logoutUser, followUnfollowUser,
    updateUser,getUserProfileByUserName
}