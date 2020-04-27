var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // request = require('request');
  // cheerio = require('cheerio');

  // request('http://192.168.1.50:32400/status/sessions', function (error, response, html) {
  //   if (!error && response.statusCode == 200) {
  //       var $ = cheerio.load(html, {
  //         xmlMode: true
  //       });

  //       title = $('Video').attr('title');
  //       year  = $('Video').attr('year');
  //       duration = $('Video').attr('duration');
  //       summary = $('Video').attr('summary');
  //       moviePoster = 'http://192.168.1.50:32400' + $('Video').attr('thumb');
  //       console.log('Now playing: ' + title + ' ' + year);
  //   }
  // });

  // function millisToMinutesAndSeconds(millis) {
  //   var minutes = Math.floor(millis / 60000);
  //   var seconds = ((millis % 60000) / 1000).toFixed(0);
  //   return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  // }

  res.render('index', {
    // title: title,
    // year: year,
    // summary: summary,
    // duration: millisToMinutesAndSeconds(duration),
    // moviePoster: moviePoster
  });
});

module.exports = router;
