const db = require("../../config/db").connection;

const all_users_info = async (req, res) => {
    return res.send("all_users_info\n");
}

const user_todo = async (req, res) => {
    return res.send("user_todo\n");
}

const user_info = async (req, res) => {
    return res.send("user_info\n");
}

const user_delete = async (req, res) => {

    db.query("DELETE FROM user WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send("ERR");
        } else {
            console.log("user id is " + req.params.id + " deleted");
            console.log(rows);
            console.log(fields);
            res.status(200).send("OK");
        }
    });
}

module.exports = {
    all_users_info,
    user_todo,
    user_info,
    user_delete
}