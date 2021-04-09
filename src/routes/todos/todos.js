const { decodeBase64 } = require("bcryptjs");

const view_all = async (req, res) => {
    return res.send("view_all\n");
}

const view_user = async (req, res) => {
    return res.send("view_user\n");
}

const todo = async (req, res) => {
    const user_id = req.body.user_id;
    const description = req.body.description;
    const title = req.body.title;
    const due_time = req.body.due_time;
    db.query("INSERT INTO todo (title, description, due_time, user_id) VALUES (?, ?, ?, ?)", [title, description, due_time, user_id]);
    if (err) {
        console.log(err.toString());
        res.status(500).send({msg : " creation error " + err});
    }
}

module.exports = {
    view_all,
    view_user,
    todo
}