const express = require('express');
const routes = express.Router();


const loginController = require('../controllers/loginController');
routes.post('/login', loginController.login);

const registerController=  require ("../controllers/registerController")
routes.post("/register",registerController.register);

const listController =  require ("../controllers/listController")
routes.get("/list", listController.list);

const { addMessage, getMessages } = require("../controllers/messageController");
routes.post("/addmsg/", addMessage);
routes.post("/getmsg/", getMessages);

const teachTagcontroller = require("../controllers/teachTagController");
routes.post("/teachtag/:id", teachTagcontroller.create)

const learnTagController = require("../controllers/LearnTagController");
routes.post("/learntag/:id", learnTagController.create)

const scheduleMentorship = require("../controllers/ScheduleMentorshipController");
routes.post("/scheduleMentorship/:userId_teacher/:userId_student",scheduleMentorship.create)

const HastagController = require("../controllers/HastagController");
routes.get("/search", HastagController.search)
module.exports = routes;