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
            res.status(500).send({msg : err.toString()});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
            res.json({ "token": token});
        }
    });
};

const login = async (req, res) => {
    let index = 0;
    const email = req.body.email;
    const password = req.body.password;

    db.query ("SELECT * FROM user", [email, password], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : " internal server error " + err});
        }
        for (; index < rows.length; index++) {
            if (rows[index].password == req.body.password) {
                res.status(200).send({msg : "Token of the newly logged in user"});    
                return;
            };
        }
        if (index == rows.length) {
            res.status(404).json({msg: "Invalid Credentials"});
            return;
        };
    });
};

module.exports = {
    register,
    login
}