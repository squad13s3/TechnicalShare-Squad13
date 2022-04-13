
// é um framework para aplicativo da web
const express = require('express');
const routes = require('../src/router');

cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();
//const socket = require("socket.io");

const app = express();
/*
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
*/
app.use(cors());
app.use(express.json())
app.use(routes);

 app.listen(process.env.PORT || 3333)
/*

const io = socket(server, {
    cors: {
      origin: "http://localhost:3333",
      credentials: true,
    },
  });
  
  global.onlineUsers = new Map();
  io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });
  
    socket.on("send-msg", (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });
  */