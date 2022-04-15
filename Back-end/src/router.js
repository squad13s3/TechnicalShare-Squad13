const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');
routes.get('/getabout/:id', userController.getAbout)
routes.post('/about/:id', userController.insertAbout)

const authController = require('../controllers/authController');
routes.post('/login', authController.login);
routes.post("/register", authController.register);

const mentorshipController = require("../controllers/mentorshipController");
routes.post("/scheduleMentorship/:userId_teacher/:userId_student",mentorshipController.create)

const tagController = require("../controllers/tagController");
routes.post("/search", tagController.search)
routes.post("/learntag/:id", tagController.learnTagUpdate)
routes.post("/teachtag/:id", tagController.teachTagUpdate)
routes.get("/searchteachtag/:id", tagController.searchTeachTagById)
routes.get("/searchlearntag/:id", tagController.searchLearnTagById)

module.exports = routes;