import Trainer from '../model/Trainer.js';
import User from '../model/user.js';
import bcrypt from 'bcrypt';

export const registerTrainer = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body = { ...req.body, password: hashedPassword };
        console.log(req.body);
        let newdata = new Trainer(req.body);
        let response = await newdata.save();
        
        let userData = new User(req.body);
        let responselogin=await userData.save();

        res.json(response);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


export const ViewTrainer = async (req, res) => {
    try {
        let response = await Trainer.find()
        console.log(response);
        res.json(response)
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export const deleteTrainer = async(req,res)=>{
    try{
        let {id} = req.body;
        await Trainer.findOneAndDelete({ _id: id });
        res.status(200).json({ message: 'Trainer removed successfully' });
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export const statusTrainer = async(req,res)=>{
    let {id,status}=req.body;
    try{
        let response = await Trainer.updateOne({ _id: id },{ $set: { status: status } });   
    }
    catch(e){
        res.status(500).json({ message: e.message });
    }
}