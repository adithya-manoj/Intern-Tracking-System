import mongoose from "mongoose";

const courseSchema=new mongoose.Schema({
    name:{type:String,required:true},
    syllabus:{type:String,required:true},
    courseimage:{type:String,required:true}
})

const Course = mongoose.model('course',courseSchema);
export default Course;