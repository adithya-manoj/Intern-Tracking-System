import mongoose from "mongoose";
import Intern from "./Intern.js";

const taskSchema = new mongoose.Schema({
    intern: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Intern
    },
    question: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    file: {
        type: String,
    },
    link: {
        type: String,
    },
    deadline: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
    marks: {
        type: String
    },
    status:{
        type: Boolean,
        default:false
    }

}
)
const Task = mongoose.model('task', taskSchema)
export default Task