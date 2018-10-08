// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
// var exampleUser = {
//   name: 'Taka',
//   email: 'taka@taka.com'
// };
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkpoint');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  return "database connectied"
});
/////////////////////////////////////////////////////////////////////////////////
var UserSchema = new mongoose.Schema({
  name: String,
  email:String
})


var User = mongoose.model('User', UserSchema);
/////////////////////////////////////////////////////////////////////////
var SaveUser=function(data,called){
  var NUser=new User(data);
  NUser.save(function(error,data){
    if(err){
      callback(err,null)
    }
   callback(null,data)
  })
}
///////////////////////////////////////////////////////////////////////
module.exports.User=User;
module.exports.SaveUser=SaveUser;
