require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User")

const JWT_SECRET = process.env.JWT_SECRET;

const createNewUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        let user = await User.findOne({ email: email });

        if (user)
            return res.status(400).json({errors:["User already exists"]});
        
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(password, salt);

        user = await User.create({
            name: name, email: email, password: securePassword
        });
        
        const data = { user: {id: user.id} };
        const authToken = jwt.sign(data, JWT_SECRET, {"expiresIn": "1d"});

        // Status 201 --> successfull resource creation
        return res.status(201).json({authToken: authToken});
    }
    catch (error) {        
        console.log(error.message);
        return res.status(500).json({errors: ["Internal Server Error!"]});
    }
}

const userLogin = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email});

        if (!user)
            return res.status(400).json({errors: ["Please provide valid credentials."]});

        const verifiedPassword = await bcrypt.compare(password, user.password);
        if (!verifiedPassword)
            return res.status(400).json({errors: ["Please provide valid credentials."]});

        const data = {user: {id: user.id}};
        const authToken = jwt.sign(data, JWT_SECRET);
        return res.status(200).json({authToken: authToken});
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({errors: ["Internal Server Error!"]});
    }
}

module.exports = {createNewUser, userLogin};