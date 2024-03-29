var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
require('dotenv').config()

var indexRouter = require('./routes/index');
var patientsRouter = require('./routes/patients');
var doctorsRouter = require('./routes/doctors');
var recordsRouter = require('./routes/records');
var recordTypesRouter = require('./routes/recordTypes');
var recordDetailsRouter = require('./routes/recordDetails');
var appointmentsRouter = require('./routes/appointments');
var clientFilesRouter = require('./routes/client-files');
var authRouter = require('./routes/auth');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/records', recordsRouter);
app.use('/recordTypes', recordTypesRouter);
app.use('/recordDetails', recordDetailsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/files', clientFilesRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
