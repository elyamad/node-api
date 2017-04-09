var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'API REST - NodeJS',
    message: "Welcome to Express. This app is a full API REST developped by Node and Express.\n Enjoy it ... :)",
    userURI: "/users"
  });
});

module.exports = router;
