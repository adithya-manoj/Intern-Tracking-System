import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next) => {
  try{
    
    let token=req.headers.authorization
    let decode=jwt.verify(token,'abc')
    next()
  }
  catch(e){
    console.log(e);
    
  }
}

export default verifyToken;