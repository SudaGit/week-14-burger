/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/

// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// we placed the connections in this source object
var source = {


// localhost
    localhost: {
         port: 3306,
         host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
         user: 'eu4xz0nyaonngbf4',
         password: "odozzhsdf95oio5k",
         database: "fab7d2a5n3m9rpt0"  
    },
    // localhost
    // localhost: {
    //     port: 3306,
    //     host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    //     user: 'eu4xz0nyaonngbf4',
    //     password: "odozzhsdf95oio5k",
    //     database: "fab7d2a5n3m9rpt0"  
    // },

    // var source = {
    // // localhost
    // localhost: {
    //     port: 3306,
    //     host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    //     user: 'eu4xz0nyaonngbf4',
    //     password: "c377x1xc6713qabw",
    //     database: "odozzhsdf95oio5k"  
    // },
    // jawsDB
    jawsDB: {
        host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
         user: 'eu4xz0nyaonngbf4',
         password: "odozzhsdf95oio5k",
         database: "fab7d2a5n3m9rpt0"  
    }
}

// we use source.[name of connection] to hook into mysql
 var connection = mysql.createConnection(  source.jawsDB || source.localhost );
//var connection = mysql.createConnection(source.localhost);




connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
