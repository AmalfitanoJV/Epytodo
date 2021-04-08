const db = require("../../config/db");

const User = function(user) {
    this.email = user.email;
    this.name = user.name;
    this.active = user.active;
};

const all_users_info = async (req, res) => {
    return res.send("all_users_info\n");
}

const user_todo = async (req, res) => {
    return res.send("user_todo\n");
}

const user_info = async (req, res) => {
    return res.send("user_info\n");
}

module.exports = {
    all_users_info,
    user_todo,
    user_info
}