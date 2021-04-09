const routeur = require('express').Router();
const authservice = require('./routes/auth/auth');
const todoservice = require('./routes/todos/todos');
const userservice = require('./routes/user/user');
const auth_middleware = require('./middleware/auth');

routeur.get("/", (req, res) =>{
    res.json({ message: "Welcome on the Epytodo app !"});
})

routeur.post("/login", authservice.login);
routeur.post("/register", authservice.register);
routeur.post("/todo", todoservice.todopost);

routeur.use(auth_middleware.auth_middleware);

routeur.get("/todo", todoservice.view_all);
routeur.get("/todo/:id", todoservice.view_user);
routeur.get("/user", userservice.all_users_info);
routeur.get("/user/:id", userservice.user_info);
routeur.get("/user/:email", userservice.user_info);
routeur.get("/user/todo", userservice.user_todo);

//delete data
routeur.delete("/user/:id", userservice.user_delete);
routeur.delete("/todo/:id", todoservice.tododel);
module.exports = routeur;