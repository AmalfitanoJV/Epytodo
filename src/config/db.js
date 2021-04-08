const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

async function tableservice(req, res, next) {
    connection.execute(
        'SELECT * `client` WHERE `nom` = ?',
        ['Rick C-137'],
        function(err, results, fields) {
            if (err) {
                console.log(err.toString());
            } else {
                console.log(results);
                console.log(fields);
            }
        }
    );
    res.send("ok mec");
};
module.exports = {
    connection
};