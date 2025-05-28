const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db-post'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected to MySql');
    }
});

module.exports = connection;
