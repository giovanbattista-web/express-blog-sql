// IMPORTAZIONE DI mysql2
const mysql = require('mysql2');

// DICHIARO LA VARIABILE PER LA CONNESSIONE AL DB
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db-post'
});

// UTILIZZO LA VARIABILE CREATA PER INSTAURARE LA CONNESSIONE AL DB
connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected to MySql');
    }
});

module.exports = connection;
