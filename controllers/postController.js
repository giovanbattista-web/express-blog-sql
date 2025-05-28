const connection = require('../data/db');

const index = (req, res) => {
    const sql = "SELECT * FROM posts";

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" });
        }
    })

    res.send("Elenco post");
};

const show = (req, res) => {
    res.send("Post con id " + req.params.id);
};

module.exports = {
    index,
    show
}