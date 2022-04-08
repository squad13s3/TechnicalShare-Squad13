const express = require('express');
const routes = express.Router();


const loginController = require('../controllers/loginController');
routes.post('/login', loginController.login);

const registerController=  require ("../controllers/registerController")
routes.post("/register",registerController.register);

module.exports = routes;