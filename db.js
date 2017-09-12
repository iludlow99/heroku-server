var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'iLovepostgres', {
	host: 'localhost',
	dialect: 'postgres'
});



sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);

var User = sequelize.import('./models/user')
var Definition = sequelize.import('./models/definition')
var Log = sequelize.import('./models/log')

module.exports = sequelize