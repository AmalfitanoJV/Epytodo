require('dotenv').config();

const express = require('express');
const routeur = express;
const mysql = require('mysql2');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/", require('./restapi'));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);

});