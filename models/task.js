var db = require('../dbconnection'); //reference of dbconnection.js

var Task = {
  getAllTasks:function(callback){
    return db.query("Select * from task", callback);
  },

  getTaskById:function(id,callback){
    var _id = [id];

    return db.query("select * from task where Id=?",_id,callback);
  },

  addTask:function(task,callback){
    var _task = [task.Id, task.Title, task.Status];

    return db.query("Insert into task values(?,?,?)", _task,callback);
  },

  deleteTask:function(id,callback){
    return db.query("delete from task where Id=?",[id],callback);
  },

 updateTask:function(id, task,callback){
   return db.query("update task set Title=?,Status=? where Id=?",[task.Title, task.Status, id],callback);
 }
};

module.exports = Task;
