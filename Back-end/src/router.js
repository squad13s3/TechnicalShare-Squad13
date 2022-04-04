const express = require('express');
const routes = express.Router();


const loginController = require('../controllers/loginController');
routes.get('/login', loginController.login);


module.exports = routes;