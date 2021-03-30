const routeur = require('express').Router();
const authservice = require('./routes/auth/auth');
const todoservice = require('./routes/todos/todos');
const userservice = require('./routes/user/user');

routeur.get("/login", authservice.login);
routeur.get("/register", authservice.register);

routeur.get("/todo", todoservice.view_all);
routeur.get("/todo/:id", todoservice.view_user);

routeur.get("/user", userservice.all_users_info);
routeur.get("/user/:id" || "/user/:email", userservice.user_info);
routeur.get("/user/todo", userservice.user_todo);

module.exports = routeur;