const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');
routes.get('/getabout/:id', userController.getAbout)
routes.post('/about/:id', userController.insertAbout)


const authController = require('../controllers/authController');
routes.post('/login', authController.login);
routes.post("/register", authController.register);



const teachTagcontroller = require("../controllers/teachTagController");
routes.post("/teachtag/:id", teachTagcontroller.create)

const learnTagController = require("../controllers/LearnTagController");
routes.post("/learntag/:id", learnTagController.create)

const scheduleMentorship = require("../controllers/ScheduleMentorshipController");
routes.post("/scheduleMentorship/:userId_teacher/:userId_student",scheduleMentorship.create)

const tagController = require("../controllers/tagController");
routes.post("/search", tagController.search)
routes.get("/searchteachtag/:id", tagController.searchTeachTagById)
routes.get("/searchlearntag/:id", tagController.searchLearnTagById)

module.exports = routes;