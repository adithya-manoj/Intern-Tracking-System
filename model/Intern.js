import mongoose from "mongoose";

const internSchema = new mongoose.Schema({
    name:{type:String,required:true},
    date:{type:Date,required:true},
    course:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    usertype:{type:String}
})

const Intern = mongoose.model('intern', internSchema)

export default Intern;