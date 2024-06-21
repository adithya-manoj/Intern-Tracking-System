import Trainer from '../model/Trainer.js';
import bcrypt from 'bcrypt';

export const registerTrainer = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body = { ...req.body, password: hashedPassword };
        console.log(req.body);
        let newdata = new Trainer(req.body);


        let response = await newdata.save();
        res.json(response);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export const LoginTrainer = async (req, res) => {
    try {
        const { username, password } = req.body;
        let response = await Trainer.findOne({ username: username })

        if (!response) {
            return res.status(500).json('User not Found!!')
        }
        let matchPassword = await bcrypt.compare(password, response.password)

        if (!matchPassword) {
            return res.status(500).json('Incorrect Password!!')
        }

        res.json(response)
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export const ViewTrainer = async (req, res) => {
    try {
        let response = await Trainer.find()
        console.log(response);
        res.json(response)
    }
    catch (e) {

    }
}