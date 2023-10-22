var jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;


const fetchuser = (req, res, next)=>{
    // Get the user from JWT token and add id to req object
    const token = req.header('authToken');

    if (!token)
        return res.status(401).send({errors: ["Not Authorized to Perform the Action!"]});

    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    }
    catch(error){
        console.log(error);
        return res.status(401).send({errors: ["Not Authorized to Perform the Action!"]});
    }
}

module.exports = fetchuser;