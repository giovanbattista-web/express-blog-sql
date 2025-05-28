const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("Elenco post ");
})

router.get('/:id', (req, res) => {
    console.log(req);
    console.log("Post con id");
    res.send("Dettaglio post");
})

module.exports = router;


