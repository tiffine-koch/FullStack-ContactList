'use strict'

var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  fs.readFile('./data/contacts.json', function(err, data) {
    var contacts = JSON.parse(data);
    res.render('index.jade', { title: 'Contact List', contacts: contacts });
  });
});

module.exports = router;
