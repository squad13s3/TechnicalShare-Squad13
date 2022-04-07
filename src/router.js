const express = require('express');
const routes = express.Router();


const loginController = require('../controllers/loginController');
routes.get('/login', loginController.login);

const registerController=  require ("../controllers/registerController")
routes.get("/register",registerController.register);

module.exports = routes;