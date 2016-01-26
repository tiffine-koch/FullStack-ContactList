'use strict'

var express = require('express');
var router = express.Router();
// var fs = require('fs');


router.get('/', function(req, res, next) {
  res.render('addUser.jade', { title: 'Add Contact' });
});

module.exports = router;
