require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require("../../config/db").connection;
const { decodeBase64 } = require("bcryptjs");

const todo_view_all = async (req, res) => {
    db.query("SELECT * from todo", (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "Token not valid"});
        } else {
            res.send(rows);
            console.log(rows);
        }
    });
};

const todo_view = async (req, res) => {
    const id = req.params.id;
    db.query("SELECT id = ? from todo", [id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "Token not valid"});
        } else {
            res.send(rows);
            console.log(rows);
        }
    });
};

const todo_update = async (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    var due_time = req.body.due_time;
    var status = req.body.status;
    var id = req.params.id;

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
            res.send(rows);
            console.log(rows);
        }
    });
};

const todo_create = async (req, res) => {
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
            res.send(rows);
            console.log(rows);
        }
    });
};

const todo_delete = async (req, res) => {
    db.query("DELETE FROM todo WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "delete " + err});
        } else {
<<<<<<< HEAD
            res.status({ msg : " succesfully deleted record number : ${req.params.id}"});
            console.log(rows);
=======
            res.status(500).send({msg : `succesfully deleted record number : ${req.params.id}`});
>>>>>>> cf6efcc14945313a0343933122143d3db2528892
        }
    });

};

module.exports = {
    todo_view_all,
    todo_view,
    todo_create,
    todo_delete,
    todo_update
}