const express = require('express');
const Router = express.Router;
const moviesRoutes = Router();

const {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
} = require('../controllers/movies');

moviesRoutes.post('/', create);
moviesRoutes.get('/', retrieveAll);
moviesRoutes.get('/:id', retrieveOne);
moviesRoutes.put('/', update);
moviesRoutes.delete('/', deleteOne);

module.exports = moviesRoutes;