require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require("../../config/db").connection;
var bodyParser = require('body-parser');

const register = async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const firstname = req.body.firstname;
    const password = req.body.password;

    var token = jwt.sign({ "email": "value", "name": "value", "firstname": "value", "password": "value"}, process.env.SECRET);
    db.query ("INSERT INTO user (email, password, name, firstname) VALUES (?, ?, ?, ?)", [email, password, name, firstname], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : " internal server error " + err});
        } else {
            console.log("user create; ", rows[0].name);
            console.log(process.env.SECRET);
            res.json({ "token": token});
        }
    });
};

const login = async (req, res) => {

    return res.send("login\n");
}

module.exports = {
    register,
    login
}