import Intern from "../model/Intern.js";
import User from "../model/user.js";
import bcrypt from 'bcrypt';

export const registerIntern = async(req,res)=>{
    try{
        let hashedPassword = await bcrypt.hash(req.body.password,10);
        req.body={...req.body,password:hashedPassword}
        let newdata = new Intern(req.body)
        let loginuser = new User(req.body)

        let response = await newdata.save();
        let responselogin = await loginuser.save();
        res.json(response);
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}

export const viewIntern = async(req,res)=>{
    try{
        let response = await Intern.find();
        res.json(response);

    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}

export const deleteIntern = async(req,res)=>{
    try{
        let {id}=req.body;
        console.log(req.body);
        let response = await Intern.findOneAndDelete({ _id: id });
        res.status(200).json({ message: 'Intern removed successfully' });
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}
export const countInterns = async(req,res)=>{
    try{
        console.log(req.query);
        const { course } = req.query; 
        let response = await Intern.countDocuments({course:course });
        res.json(response);
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}

export const statusIntern = async(req,res)=>{
    let {id,status}=req.body;
    try{
        let response = await Intern.updateOne({ _id: id },{ $set: { status: status } });    
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}

export const updateInterns = async(req,res)=>{

const updates=req.body;
try{
for(const intern of updates){
    await Intern.findByIdAndUpdate(intern._id,{trainer:intern.trainer,fees:intern.fees});
}
res.status(200).json({message:'Trainers assigned Successfully'})
}
catch(e){
    console.log(e.message);
}
console.log();
   
}
