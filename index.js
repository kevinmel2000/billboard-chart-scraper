const express = require('express');
const app = express();
const serverless = require('serverless-http');
const PORT = 3000;
const routes = require('./src/router')

app.use('/.netlify/functions/server',routes);
app.use('/',routes);

console.log(`Server listening on port ${PORT}`);

module.exports.handler = serverless(app);

app.listen(PORT);