var db = require('../dbconnection'); //reference of dbconnection.js

var User = {
  getAllUsers:function(callback){
    return db.query("Select * from user", callback);
  },

  getUserById:function(id,callback){
    var _id = [id];
    return db.query("select * from user where id=?",_id ,callback);
  },

  addUser:function(user,callback){
    var _user = [user.firstname, user.lastname, user.sex];
    // user.id is auto increment !
    return db.query("Insert into user (firstname, lastname, user.sex) values (?,?,?)", _user,callback);
  },

  deleteUser:function(id, callback){
    var _id = [id];
    return db.query("delete from user where id=?", _id, callback);
  },

 updateUser:function(id, user, callback){
   return db.query("update user set firstname=?, lastname=?, sex=? where id=?",[user.firstname, user.lastname, user.sex, id],callback);
 }
};

module.exports = User;
