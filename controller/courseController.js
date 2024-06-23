import Course from "../model/Course.js";

export const course = async (req, res) => {
    try {
        const { name } = req.body.name;
        console.log(req.body);
        
        const syllabus = req.files.syllabus ? req.files.syllabus[0].filename : null;
        const imageFile = req.files.courseimage ? req.files.courseimage[0].filename : null;
        console.log(req.files);
        console.log(imageFile);
        req.body={...req.body,courseimage:imageFile,syllabus:syllabus}
        const newData = new Course(req.body);

        let response = await newData.save();
        res.json(response);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export const viewCourse = async (req,res) =>{
    try{

        let response = await Course.find()
        res.json(response);
    }
    catch(e){
        res.status(500).json({ message: e.message }); 
    }
}

export const deleteCourse = async(req,res)=>{
    try{
        let {name}=req.body;
        const deletedCourse = await Course.findOneAndDelete({ name: name });
        res.status(200).json({ message: 'Course deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    }
