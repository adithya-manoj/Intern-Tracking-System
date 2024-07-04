import Intern from "../model/Intern.js";
import Task from "../model/Task.js";
import Trainer from "../model/Trainer.js";
import User from "../model/user.js";
import bcrypt from 'bcrypt';

export const registerIntern = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body = { ...req.body, password: hashedPassword }
        let newdata = new Intern(req.body)
        let response = await newdata.save();
        
        let userData = new User({...req.body,userId:response._id});
        await userData.save();
        res.json(response);
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export const viewIntern = async (req, res) => {
    try {
        let response = await Intern.find();
        res.json(response);

    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export const deleteIntern = async (req, res) => {
    try {
        let { id } = req.body;
        console.log(req.body);
        let response = await Intern.findOneAndDelete({ _id: id });
        res.status(200).json({ message: 'Intern removed successfully' });
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const countInterns = async (req, res) => {
    try {
        console.log(req.query);
        const { course } = req.query;
        let response = await Intern.countDocuments({ course: course });
        res.json(response);
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export const statusIntern = async (req, res) => {
    let { id, status } = req.body;
    try {
        let response = await Intern.updateOne({ _id: id }, { $set: { status: status } });
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export const updateInterns = async (req, res) => {

    const updates = req.body;
    try {
        for (const intern of updates) {
            await Intern.findByIdAndUpdate(intern._id, { trainer: intern.trainer, fees: intern.fees });
        }
        res.status(200).json({ message: 'Trainers assigned Successfully' })
    }
    catch (e) {
        console.log(e.message);
    }
    console.log();

}

export const viewAssignedIntern = async (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    console.log(id);
    try {
        let response = await Intern.find({ trainer: id })
        console.log(response);
        res.json(response)
    }
    catch (e) {
        console.log(e.message);
    }

}

export const assignTask = async (req, res) => {
    let interns=req.body.myInterns
    let formData=req.body.formData
    console.log(req.body);
    try {
        const taskPromises = interns.map(async (internId) => {
          const newTask = new Task({
            intern: internId,
            question: formData.question,
            notes: formData.notes,
            file: formData.file,
            link: formData.link,
            deadline: formData.deadline,
          });
          return newTask.save();
        });
    const taskResponses=await Promise.all(taskPromises);
    res.status(200).json(taskResponses)
}
    
    catch (e) {
    console.log(e.message);
}
}

export const ViewTask = async (req, res) => {
    
    try {
        let response = await Task.find()
        
        res.json(response)
    }
    catch (e) {
        console.log(e.message);
    }

}
export const ViewTaskbyQuestion = async (req, res) => {
    let {question} = req.params;
    console.log(question);
    
    try {
        let response = await Task.find({question:question})
        console.log(response);
        res.json(response)
    }
    catch (e) {
        console.log(e.message);
    }

}

export const ViewTaskbyUser = async (req, res) => {
    let user = req.params.user;
    
    try {
        let response = await Task.find({intern:user})
        console.log(response);
        res.json(response)
    }
    catch (e) {
        console.log(e.message);
    }

}

export const updateAnswer = async (req, res) => {
    const { answer, questionId } = req.body;
    
    try {
        
       
        let updatedTask = await Task.findOneAndUpdate(
            { _id: questionId },
            { $set: { answer: answer } },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Question not found' });
        }

        let updatedStatus = await Task.findOneAndUpdate(
            { _id: questionId },
            { $set: { status: true } },
            { new: true }
        );

        console.log('Answer updated successfully:', updatedTask);
        res.json(updatedTask);
    } catch (error) {
        console.error('Error updating answer:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// export const updateStatus = async(req,res)=>{
//     const {questionId } = req.body;
//     try {
//         let updatedStatus = await Task.findOneAndUpdate(
//             { _id: questionId },
//             { $set: { status: true } },
//             { new: true }
//         );
        
//     } catch (error) {
//         console.error('Error updating Status:', error.message);
//     }
// }
