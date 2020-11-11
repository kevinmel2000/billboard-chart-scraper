const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send(`
    This is billboard chart scraper open source API.
    <a href="https://github.com/fauzan121002/billboard-chart-scraper" target="_blank">Click here for guide</a>
    `);
});

module.exports = router;