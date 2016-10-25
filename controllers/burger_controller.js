/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burgers = require('../models/burgers.js');

router.get('/', function (req, res) {
	res.redirect('/burgers/create');
});
router.post('/', function (req, res) {
	res.redirect('/burgers/create');
});

router.get('/burgers/create', function (req, res) {
	burgers.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burgers.create(['burger_name' ,	'devoured'], [req.body.burger_name, req.body.devoured], function () {
		res.redirect('/burgers/create');
	});
});




module.exports = router;
