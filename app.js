require('dotenv').config()
var express = require('express')
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser')
var sequelize = require('./db')

//Create a table

sequelize.sync();
sequelize.sync(/*{force: true}*/) 
app.use(bodyParser.json())

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'))

http.listen(process.env.PORT || 3000, function(){
	console.log('App is listening on port 3000.')
})

//Creating a user
app.use('/api/user', require('./routes/user'))
//Logging in a user
app.use('/api/login', require('./routes/session'))

app.use('/api/log', require('./routes/log'))
//localhost:3000/user/login
app.use('/api/definition', require('./routes/definition'))

app.use('/api/test', function(req, res){
	res.send("Hello World");
})