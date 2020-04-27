window.addEventListener('DOMContentLoaded', function(){

  request = require('request');
  cheerio = require('cheerio');

  plexServerIP = '192.168.1.50';
  plexServerPort = 32400;
  pageHeight = window.innerHeight;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes;
  }

  function getMovieInfo() {
    request('http://' + plexServerIP + ':' + plexServerPort + '/status/sessions', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html, {
          xmlMode: true
        });

        movieTitle = $('Video').attr('title');
        movieYear  = $('Video').attr('year');
        movieDuration = $('Video').attr('duration');
        movieSummary = $('Video').attr('summary');
        moviePoster = 'http://' + plexServerIP + ':' + plexServerPort + $('Video').attr('thumb');
        viewOffset = $('Video').attr('viewOffset');
      }

      if (typeof movieTitle != "undefined") {
        movieData = new Object();
        movieData.title = movieTitle;
        movieData.year  = movieYear;
        movieData.duration = millisToMinutesAndSeconds(movieDuration);
        movieData.summary = movieSummary;
        movieData.poster = moviePoster;
        movieData.viewOffset = millisToMinutesAndSeconds(viewOffset);

        // console.log(JSON.parse(movie));
        // console.log(JSON.parse(movieJSON));
        var nothingPlaying =  document.querySelector('.nothing-playing');
        var movie = document.querySelector('.movie');
        var title = document.querySelector('.movie-title');
        var year = document.querySelector('.movie-year');
        var duration = document.querySelector('.movie-duration');
        var summary = document.querySelector('.summary');

        // Set HTML content
        nothingPlaying.style.display = 'none';
        movie.style.display = 'block';
        movie.style.backgroundImage = 'url(' + movieData.poster + ')';
        title.innerHTML = movieData.title;
        year.innerHTML = '(' + movieData.year + ')';
        duration.innerHTML = movieData.duration - movieData.viewOffset + ' minutes remaining';
        summary.innerHTML = movieData.summary;
      }
      else {
        var movie = document.querySelector('.movie');
        var nothingPlaying =  document.querySelector('.nothing-playing');
        movie.style.display = 'none';
        nothingPlaying.style.display = 'flex';
        nothingPlaying.style.height = pageHeight + 'px';
      }

   });
  }
  window.setInterval(function(){
    getMovieInfo();
  }, 2000);

});
