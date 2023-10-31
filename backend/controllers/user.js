require("dotenv").config();

const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const createUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;
    
        // email already exists
        let user = await User.findOne({email: email});
        if (user)
            return res.status(400).json({errors: ["Invalid Request Sent"]});

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        user = await User.create({email_id, password: hash, role});
        
        const data = {user: {id: user.user_id}};
        const authToken = jwt.sign(data, JWT_SECRET, {expiresIn: "1d"});

        // status code 201 --> resource successfully created
        return res.status(201).json({authToken});

    } catch (error) {
        console.log(error);
        return res.status(500).json({errors: ["Internal Sever Error"]})
    }
}

const userLogin = async (req, res) => {
    try{
        const {email, password} = req.body;

        let user = await User.findOne({email: email});
        if (!user)
            return res.status(400).json({errors: ["Invalid Request Sent"]});

        const verifiedPassword = await bcrypt.compare(password, user.password);

        if (!verifiedPassword)
            return res.status(400).json({errors: ["Invalid Request Sent"]});

        // password verified and username verified so generating authentication token
        const data = {user: {id: user.user_id}};
        const authToken = jwt.sign(data, JWT_SECRET, {expiresIn: "1d"});

        // status code 200 --> successfull operation
        return res.status(200).json({authToken});

    } catch (error) {
        console.log(error);
        return res.status(500).json({errors: ["Internal Server Error"]})
    }
}

module.exports = {createUser, userLogin}