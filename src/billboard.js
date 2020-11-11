const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();

router.get('/billboard-200', (req, res) => {
  url = 'https://www.billboard.com/charts/billboard-200';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      let chartList = [];

      $('.chart-list__elements li').each(function(i,elm){
        let data = $(elm);
        let proxyObject = {};

        proxyObject.rank = data.children().children().children().html();
        proxyObject.song = data.children().find('.chart-element__information').find(".chart-element__information__song").html();
        proxyObject.artist = data.children().find('.chart-element__information').find(".chart-element__information__artist").html();
        proxyObject.delta = data.children().find('.chart-element__information').find(".chart-element__information__delta").find(".chart-element__information__delta__text").html();
      
        chartList.push(proxyObject);
      });

      res.status(200).json({
        message: 'success',
        data: chartList
      });
    }
  });
});

module.exports = router;