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
    const status = req.body.status;

    var token = jwt.sign({ "title": "value", "description": "due_time", "user_id": "value", "status": "value"}, process.env.SECRET);
    db.query("INSERT INTO todo (title, description, due_time, user_id, status) VALUES (?, ?, ?, ?, ?)", [title, description, due_time, user_id, status], (err, rows, fields) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send({msg : " creation error " + err});
        } else {
            console.log(fields);
            console.log(rows);
            console.log(process.env.SECRET);
            res.json({ "token": token});
        }
    });
};

module.exports = {
    view_all,
    view_user,
    todo
}