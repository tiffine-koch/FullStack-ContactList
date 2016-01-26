'use strict'

var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  fs.readFile('./data/contacts.json', function(err, data) {
    var contacts = JSON.parse(data);
    res.send(contacts);
  });
});

router.get('/:index', function(req, res, next) {
  console.log(req.body);
  fs.readFile('./data/contacts.json', function(err, data) {
    var contacts = JSON.parse(data[req.params.index]);
    contacts.push(req.body);
    res.render('user', {data: data[req.params.index]})
  fs.writeFile('./data/contacts.json', JSON.stringify(contacts), function(err) {
    res.redirect('/');
    });
  });
});

module.exports = router;
