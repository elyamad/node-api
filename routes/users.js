var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.getAllUsers(function (err, items) {
    err ? res.json(err) : res.json(items);
  })
});

router.get('/:id', function(req, res, next){
  var _id = req.params.id;
  _id ? User.getUserById(_id, function(err, item){
    err ? res.json(err) : res.json(item);
  }) : res.json("Id is required");
});

router.post('/', function(req, res, next){
  User.addUser(req.body, function (err, count){
    err ? res.json(err) : res.json(req.body);
  })
});

router.put('/:id', function(req, res, next){
  User.updateUser(req.params.id, req.body, function(err, item){
    err ? res.json(err) : res.json(item);
  })
});

router.delete('/:id', function(req, res, next){
  User.deleteUser(req.params.id, function(err, item){
    err ? res.json(err) : res.json(item);
  })
});

module.exports = router;
