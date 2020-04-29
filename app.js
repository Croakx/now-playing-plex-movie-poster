const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const config = require('./config/config.js');
const indexRouter = require('./routes/index');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(config.app.port, function () {
  console.log('Now Playing Plex Movie Poster running on port ' + config.app.port + '.');
  console.log(config.plex.ip);
  console.log(config.plex.port);
  console.log(config.app.port);
});

module.exports = app;
