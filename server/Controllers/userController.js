const userModel = require("../Models/userModel")
const validator = require("validator")
const bcrypt = require("bcrypt")




// register control
const registerUser = async (req, res) => {
    console.log("req", req);
    const { gname,sname, venue, gMapLink,date,startTime,endTime,email,password } = req.body
    try {

        let user = await userModel.findOne({ email })

        if (user) return res.status(400).json("user with this email already present")

        if (!validator.isEmail(email)) return res.status(400).json("Email must be valid email")
        if (!validator.isStrongPassword(password)) return res.status(400).json("password must be strong...")

        user = new userModel({gname,sname, venue, gMapLink,date,startTime,endTime, email, password });

    
        await user.save();


        
        res.status(200).json({ _id: user._id,  email, gname,sname, venue, gMapLink,date,startTime,endTime})

    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }
}

//login control

const loginUser = async (req, res) => {
console.log(req.body);
    const { email, password } = req.body
    try {

        let user = await userModel.findOne({ email });
        if (!user)
            return res.status(400).json("Invalid email or passwor")

        if (user.password !== password)
            return res.status(400).json("Incorrect password");

        

        res.status(200).json({user})



    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }

}

module.exports = { registerUser ,loginUser }
