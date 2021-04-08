require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require("../../config/db");
var bodyParser = require('body-parser');

const register = async (req, res) => {

    var token = jwt.sign({ "email": "value", "name": "value", "firstname": "value", "password": "value"}, process.env.SECRET);
    db.query = ("INSERT INTO user SET ?", req.name, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        console.log("user create; ", req.name);
        result(null ,{id: res.insertId});
    });
    console.log(process.env.SECRET);
    return res.json({ "token": token});
};

const login = async (req, res) => {

    return res.send("login\n");
}

module.exports = {
    register,
    login
}