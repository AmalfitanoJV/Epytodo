require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth_middleware = async (req, res, next) => {
    
    try {
        const decode = jwt.verify(req.headers.accesstoken, process.env.SECRET);
        console.log(decode);
        req.token = decode;
        next();
    } catch (error) {
        res.json({" msg ": " Token is not valid "});
    }
}

module.exports = {
    auth_middleware
}