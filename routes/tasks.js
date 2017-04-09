var express = require('express');
var router = express.Router();
var Task = require('../models/task');

router.get('/', function (req, res, next){
  Task.getAllTasks(function(err, items){
    err ? res.json(err) : res.json(items);
  })
});

router.get('/:id', function (req, res, next){
  var id = req.params.id;
  id ? Task.getTaskById(id, function(err, items){
    err ? res.json(err) : res.json(items);
  }) : res.json("Id is required !!");
});

router.post('/',function(req,res,next){
  Task.addTask(req.body,function(err,count){
    //console.log(req.body);
    if(err) {
      res.json(err);
    }
    else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});

router.delete('/:id',function(req,res,next){
  Task.deleteTask(req.params.id,function(err,count){
    if(err) {
      res.json(err);
    }
    else {
      res.json(count);
    }
  });
});

router.put('/:id',function(req,res,next){
  Task.updateTask(req.params.id,req.body,function(err, item){
    err ? res.json(err) : res.json(item);
  });
});

/*
router.post('/:id',function(req,res,next){
  Task.deleteAll(req.body,function(err,count){
    if(err) {
      res.json(err);
    }
    else {
      res.json(count);
    }
  });
});
*/

module.exports = router;
