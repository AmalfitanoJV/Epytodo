const { decodeBase64 } = require("bcryptjs");

const view_all = async (req, res) => {
    return res.send("view_all\n");
}

const view_user = async (req, res) => {
    return res.send("view_user\n");
}

const todo = async (req, res) => {
    db.query("INSERT INTO todo (title, description, due_time, user_id) VALUES (?, ?, ?, ?)", [title, description, due_time, user_id]);
}

module.exports = {
    view_all,
    view_user,
    todo
}