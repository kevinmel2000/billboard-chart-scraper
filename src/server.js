const express = require('express');
const app = express();
const serverless = require('serverless-http');
const path = require('path');

app.get('/', (req, res) => {
    res.send(`
    This is billboard chart scraper open source API.
    <a href="https://github.com/fauzan121002/billboard-chart-scraper" target="_blank">Click here for guide</a>
    `);
});
app.use('/.netlify/functions/server',require('./router'));
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);