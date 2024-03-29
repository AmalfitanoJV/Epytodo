const db = require("../../config/db").connection;

const all_users_info = async (req, res) => {
    db.query("SELECT * FROM user", (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "Token not valid"});
        } else {
            res.send(rows);
            console.log(rows);
        }
    });
}

const user_todo = async (req, res) => {
    var id = req.body.id;

    db.query("SELECT id = ? FROM user", [id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "user not found"});
        } else {
            res.send(rows);
        }
    });
}

const user_update = async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var name = req.body.name;
    var id = req.params.id;

    db.query("UPDATE user SET email = ?, password = ?, firstname = ?, name = ? WHERE id = ?", [email, password, firstname, name,id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "user updating failed" + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        }
    });
};

const user_info = async (req, res) => {
    db.query("SELECT email = ? FROM user", [req.params.email], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : "user view" + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
        } 
    });
}

const user_delete = async (req, res) => {

    db.query("DELETE FROM user WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send("Error: for the delete");
        } else {
            console.log("user id is " + req.params.id + " deleted");
            res.status(200).send("OK");
        }
    });
}

module.exports = {
    all_users_info,
    user_todo,
    user_info,
    user_delete,
    user_update
}