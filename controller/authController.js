

export const authentication = async(req,res)=>{
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