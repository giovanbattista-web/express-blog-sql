// IMPORTO LA VARIABILE CONNECTION
const connection = require('../data/db');

const index = (req, res) => {
    const sql = "SELECT * FROM posts";

    // ESEGUO LA QUERY
    connection.query(sql, (err, postsResults) => {

        // MESSAGGIO DI ERRORE 
        if (err) {
            return res.status(500).json({ error: "Database query failed" + err });
        }
        res.json(postsResults);
    })

};

const show = (req, res) => {
    // RECUPERARE L'ID DEL POST CHE VOGLIO MOSTRARE
    const { id } = req.params;
    // CREO LA QUERY PER IL RECUPERO DEL SINGOLO POST
    const postSql = "SELECT * FROM posts WHERE id = ?";

    connection.query(postSql, [id], (err, postResult) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed :" + err });
        }
        // CONTROLLO CHE IL POST CERCATO ESISTA
        if (postResult.length === 0) {
            return res.status(404).json({ error: "Post not found" });
        }
        // RECUPERO IL SINGOLO POST DALL'ARRAY RISULTATO
        const post = postResult[0];

        res.json(post);
    })

};

const destroy = (req, res) => {
    // RECUPERO L'ID DEL POST DA CANCELLARE 
    const id = req.params.id;

    // STABILISCO LA CONNESSIONE PER FARE LA QUERY
    // PREPARO LA QUERY COL ? ANDANDO A PREPARARE UN SEGNAPOSTO IN CUI PASSARE IN UN SECONDO MOMENTO L'ID
    // LO PASSO ALL'INTERNO DI UN ARRAY IL QUALE DIVENTA IL SECONDO PARAMETRO DEL METODO QUERY E LA FUNZIONE DI 
    // CALLBACK SARA' IL TERZO PARAMETRO, METTO SOLO ERR PERCHE' NON DEVO RESTITUIRE NULLA MA RESTITUIRE SOLO
    // LO STATO 204
    connection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
        // FACCIO IL CONTROLLO CHE ERR NON SIA PIENO
        if (err) return res.status(500).json({ error: "Database query failed : " + err });

        res.sendStatus(204);
    })
}

module.exports = {
    index,
    show,
    destroy
}