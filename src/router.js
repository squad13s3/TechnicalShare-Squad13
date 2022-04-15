const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');
routes.get('/getabout/:id', userController.getAbout)
routes.post('/about/:id', userController.insertAbout)


const loginController = require('../controllers/loginController');
routes.post('/login', loginController.login);

const registerController=  require ("../controllers/registerController")
routes.post("/register",registerController.register);



const teachTagcontroller = require("../controllers/teachTagController");
routes.post("/teachtag/:id", teachTagcontroller.create)

const learnTagController = require("../controllers/LearnTagController");
routes.post("/learntag/:id", learnTagController.create)

const scheduleMentorship = require("../controllers/ScheduleMentorshipController");
routes.post("/scheduleMentorship/:userId_teacher/:userId_student",scheduleMentorship.create)

const hastagController = require("../controllers/HastagController");
routes.post("/search", hastagController.search)
routes.get("/searchteachtag/:id", hastagController.searchTeachTagById)
routes.get("/searchlearntag/:id", hastagController.searchLearnTagById)

const { Router } = require('express');
module.exports = routes;