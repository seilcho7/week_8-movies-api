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
moviesRoutes.get('/:id([1-9]+)', retrieveOne);
moviesRoutes.put('/:id', update);
moviesRoutes.delete('/:id', deleteOne);

module.exports = moviesRoutes;