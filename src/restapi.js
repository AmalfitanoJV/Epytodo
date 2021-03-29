const routeur = require('express').Router();
const authservice = require('./routes/auth/auth');

routeur.get("/login", authservice.login);
routeur.get("/register", authservice.register);

module.exports = routeur;