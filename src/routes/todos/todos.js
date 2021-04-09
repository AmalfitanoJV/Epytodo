require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require("../../config/db").connection;
const { decodeBase64 } = require("bcryptjs");

const view_all = async (req, res) => {
    return res.send("view_all\n");
}

const view_user = async (req, res) => {
    return res.send("view_user\n");
}

const todopost = async (req, res) => {
    const user_id = req.body.user_id;
    const description = req.body.description;
    const title = req.body.title;
    const due_time = req.body.due_time;
    const status = req.body.status;

    db.query("INSERT INTO todos (title, description, due_time, user_id, status) VALUES (?, ?, ?, ?, ?)", [title, description, due_time, user_id, status], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : " creation " + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        }
    });
}

const tododel = async (req, res) => {
    db.query("DELETE FROM todos WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "delete " + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        }
    });

}

module.exports = {
    view_all,
    view_user,
    todopost,
    tododel
}