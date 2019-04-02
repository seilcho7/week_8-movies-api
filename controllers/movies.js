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
    res.json({ message: 'Updated'});
}

function deleteOne(req, res) {
    res.json({ message: 'Deleted'});
}

module.exports = {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
};