require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require("../../config/db").connection;
const { decodeBase64 } = require("bcryptjs");

const view_all = async (req, res) => {
    db.query("SELECT * FROM todo", (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "view todos" + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        }   
    });
};

const todo_view = async (req, res) => {
    const id = req.body.id
    
    db.query("SELECT id = ? from todo", [id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "updating" + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        }   
    });
};

const todo_update = async (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    var due_time =req.body.due_time;
    var status = req.body.status;
    var id = req.body.id;

    if (status == "todo") {
        status = 2;
    }
    else if (status == "in progress") {
        status = 3;
    }
    else if (status == "done") {
        status = 4;
    }
    db.query("UPDATE todo SET title = ?, description = ?, due_time = ?, status = ? WHERE id = ?", [title,description, due_time, status, id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "updating" + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        }
    });
};

const todopost = async (req, res) => {
    const user_id = req.body.user_id;
    const description = req.body.description;
    const title = req.body.title;
    const due_time = req.body.due_time;
    const status = req.body.status;

    db.query("INSERT INTO todo (title, description, due_time, user_id, status) VALUES (?, ?, ?, ?, ?)", [title, description, due_time, user_id, status], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : " creation " + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        }
    });
};

const tododel = async (req, res) => {
    db.query("DELETE FROM todo WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "delete " + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        }
    });

};

module.exports = {
    view_all,
    todo_view,
    todopost,
    tododel,
    todo_update
}