const jwt=require('jsonwebtoken')

const SECRET_KEY=123456;

const createToken=(props)=>{
    const {name,userName,email,profilePicURL,followers,following,bio,_id}=props;
    const payload=
    {
        name,userName,
        email,profilePicURL,
        followers,following,bio,_id
    }
    const token=jwt.sign(payload,'111111')
    return token

}








const validateToken=(token)=>{
    const payload=jwt.verify(token,'111111')
    return payload;

}





module.exports={
    createToken,
    validateToken
}