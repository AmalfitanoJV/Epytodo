const register = async (req, res) => {
    return res.send("register\n");
}

const login = async (req, res) => {
    return res.send("login\n");
}

module.exports = {
    register,
    login
}