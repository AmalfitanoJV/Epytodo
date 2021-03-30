require('dotenv').config();
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

const register = async (req, res) => {

    var token = jwt.sign({ "email": "value", "name": "value", "firstnam": "value", "password": "value"}, process.env.SECRET);
    console.log(process.env.SECRET);
    return res.json({ "token": token});
}

const login = async (req, res) => {

    return res.send("login\n");
}

module.exports = {
    register,
    login
}