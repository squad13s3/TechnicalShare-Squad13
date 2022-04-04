
// é um framework para aplicativo da web
const express = require('express');
const routes = require('../src/router');

const app = express();

app.use(express.json())
app.use(routes);

app.listen(3333)