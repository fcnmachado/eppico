var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express()

//initializers
require("./initializers/global")
require("./initializers/mysql")()

var index = require('./routes/index')
var users = require('./routes/users')

// view engine setup
app.set('public/views', path.join(__dirname, 'public/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// ROUTES
app.get('/', function(req, res) {
    res.sendFile('./public/views/index.html', {"root": __dirname}) // load the single view file (angular will handle the page changes on the front-end)
})

app.use('/api/users', users)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
      message: err.message,
      error: err    
    })
})

module.exports = app
