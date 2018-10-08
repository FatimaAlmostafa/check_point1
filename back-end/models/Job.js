// TODO: Create and export a mongoose model called `Job` that follows the description in the README


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkpoint');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  return "database connectied"
});
/////////////////////////////////////////////////////////////////////////////////
var JobSchema = new mongoose.Schema({
  company: String,
  title:String,
  description:String,
  postedDate:Date,
  salary:Number
})


var Job = mongoose.model('Job', JobSchema);
/////////////////////////////////////////////////////////////////////////
var SaveJob=function(data,called){
  var NUser=new Job(data);
  NUser.save(function(error,data){
    if(err){
      callback(err,null)
    }
   callback(null,data)
  })
}
///////////////////////////////////////////////////////////////////////
module.exports.Job=Job;
module.exports.SaveJob=SaveJob;
