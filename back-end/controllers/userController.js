var db=require('../models/User.js');
var mongoose=require('mongoose');
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  db.User.findOne({name:name},function(err,data){
    if (err) {
      callback('err',null)
    } else {
      callback(null,data);
    }
  })
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  db.User.findOneAndUpdate({name:name},{$set:newEmail},function(err,data) {
    if (err) {
      callback('err in ubdating')
    } else {
      callback('ubdating successfully');
    }
  })
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  db.User.find({}).pretty()
};
