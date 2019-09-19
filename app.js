var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors =require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true}, (err) =>{
	if(err) return console.error('connection error occured in test_mg.js + ['+err + ']')
	console.log('mongo connection succeeded!')
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apisRouter = require('./apis/index');

var app = express();

app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apis', apisRouter);


const server = app.listen(8081, () => {
	console.log('server running on port 8081')
})

const io = require('socket.io')(server)
io.on('connection', function(socket){
	console.log('id: ' + socket.id)
	socket.on('sendMsg', function(data){
		console.log('from client: ' + data)
	})
	socket.interval = setInterval(() => {
		console.log('send msg to client')
		socket.send('Hi ! im server')
	}, 500)
})

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

module.exports = app;
