
// é um framework para aplicativo da web
const express = require('express');
const routes = require('../src/router');

cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

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

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(process.env.PORT || 3333)