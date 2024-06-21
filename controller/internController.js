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