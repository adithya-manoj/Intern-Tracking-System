import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    date:{type:Date,required:true},
    course:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    usertype:{type:String}

})

const Trainer = mongoose.model('trainer',trainerSchema)

export default Trainer;