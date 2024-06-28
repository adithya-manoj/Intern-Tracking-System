import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    usertype:{type:String,required:true},
    userId:{type:mongoose.Types.ObjectId}
})

const User = mongoose.model('user',userSchema)

export default User;