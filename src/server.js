const express = require('express');
const app = express();
const serverless = require('serverless-http');
const path = require('path');

app.use('/.netlify/functions/server',require('./router'));
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);