const connection = require('../data/db');

const index = (req, res) => {
    const sql = "SELECT * FROM posts";

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" + err });
        }
        // console.log(results);
        res.json(results);
    })

};

const show = (req, res) => {
    const id = req.params.id;

    const sql = "SELECT * FROM posts WHERE id = " + id;

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed :" + err });
        }
        res.json(results);
    })

    // res.send("Post con id " + req.params.id);
};

const destroy = (req, res) => {
    const id = req.params.id;

    connection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).json({ error: "Database query failed : " + err });

        res.sendStatus(204);
    })
}

module.exports = {
    index,
    show,
    destroy
}