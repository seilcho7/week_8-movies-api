function create(req, res) {
    res.json({ message: "Created"});
}

function retrieveAll(req, res) {
    res.json({ message: "Retrieved all"});
}

function retrieveOne(req, res) {
    const {id} = req.params;
    const status = false;
    if (status) {
        res.json({ message: `Retrieved ${id}`})
    } else {
        res.status(404).json({ message: "404 error, could not retrieve"});
    }
}

function update(req, res) {
    const {id} = req.params;
    res.json({ message: `Updated ${id}`});
}

function deleteOne(req, res) {
    const {id} = req.params;
    res.json({ message: `Deleted ${id}`});
}

module.exports = {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
};