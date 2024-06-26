import mongoose from "mongoose";
import Trainer from "./Trainer.js";

const internSchema = new mongoose.Schema({
    name:{type:String,required:true},
    date:{type:String,required:true},
    course:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    usertype:{type:String},
    status:{type:Boolean},
    fees:{type:String},
    trainer:{type:mongoose.Schema.Types.ObjectId,
        ref:Trainer
    }
})

const Intern = mongoose.model('intern', internSchema)

export default Intern;