const index = (req, res) => {
    res.send("Elenco post");
}

const show = (req, res) => {
    res.send("Post con id " + req.params.id);
};

module.exports = {
    index,
    show
}