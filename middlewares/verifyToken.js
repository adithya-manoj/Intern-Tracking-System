import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next) => {
  // try{
    
    let token=req.headers.authorization
    let decode=jwt.verify(token,'abc')
    console.log(decode,'tokens');
    console.log('adhi');
    next()
  // }
  // catch(e){
  //   console.log(e);
    
  // }
}

export default verifyToken;