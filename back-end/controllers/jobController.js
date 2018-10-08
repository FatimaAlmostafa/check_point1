var db=require('../models/Job.js');
var mongoose=require('mongoose');
///////////////////////////////////////////////////////////////////////////////////////
// Create a new job in the database
exports.createJob = function (job, callback) {
db.Job.insertMany({company:company,title:title,description:description,salary:salary,postedDate:postedDate},function(err,callback){
  if (err) {
    console.log("err in createJob")

  } else {
    console.log('successfully created')
  }
})

};
//////////////////////////////////////////////////////////////////////////////////////////////////
// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  db.Job.find({salary:{$gt:50,000}},function(err,data) {
    if (err) {
      callback("no result")

    } else {
      callback(data)
    }
  })
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
