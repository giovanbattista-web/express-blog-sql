const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server del mio blog")

});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})