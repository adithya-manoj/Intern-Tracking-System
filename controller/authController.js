import User from "../model/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const authentication = async (req, res) => {
    try {
        const { username, password } = req.body;
        let response = await User.findOne({ username: username })
        if (!response) {
            return res.status(500).json('User not Found!!')
        }
        let matchPassword = await bcrypt.compare(password, response.password)

        if (!matchPassword) {
            return res.status(500).json('Incorrect Password!!')
        }
        let token = jwt.sign({ id: response._id, username: response.username }, 'abc')
        console.log(token);
        res.json({ response, token })
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}