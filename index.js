const express = require('express');
const app = express();
const serverless = require('serverless-http');
const PORT = 3000;
const routes = require('./src/router')

app.use('/.netlify/functions/server',routes);

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);

module.exports = app;
module.exports.handler = serverless(app);