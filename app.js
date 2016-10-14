var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();

var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(8000);
io.set("origins", "*:*");

var currentPrice = 99;
var messages = [{id: 1, group_id: 2,text: "Can we incorporate more changes into this?",name: "Frieda Pala",sender: true},{id: 2, group_id: 2, text: "Will complete it by EOD",name: "Ferdinand Frois",sender: false},{id: 3,group_id: 2,text: "whats up?",name: "Frieda Pala",sender: true},{id: 122,group_id: 2,text: "Evidence.pdf",name: "attachment",sender: false}];
var groups = [{id: 1,name: "Ferdinand Frois modified matter Aliens vs Planet"},{id: 2,name: "Frieda Pala added Task 1"},{id: 4,name: "Frieda Pala attached Time Meditation/Arbitr... to the matter Aliens vs Planet"},{id: 5,name: "Frieda Pala attached task test to the time Meditation/Arbitr..."}];

io.on('connection',function(socket){
	socket.emit('message',messages);
	socket.on('latest_message',function(data){
		messages.push(data);
		socket.emit('message',messages);
		socket.broadcast.emit('message',messages);
		console.log(messages);
	});
});

io.on('connection',function(socket){
	socket.emit('groups',groups);
	socket.on('add_group',function(data1){
		groups.push(data1);
		socket.emit('groups',groups);
		socket.broadcast.emit('groups',groups);
	});
});



app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/templates', express.static(__dirname + '/views/templates/'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;
