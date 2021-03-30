const view_all = async (req, res) => {
    return res.send("view_all\n");
}

const view_user = async (req, res) => {
    return res.send("view_user\n");
}

module.exports = {
    view_all,
    view_user
}