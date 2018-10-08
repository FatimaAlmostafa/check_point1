var _ = require('underscore');

// The seeded state of our in-memory "database"
var users = [
  {
    id: 1,
    name: 'Taka',
    email: 'taka@taka.com'
  },
  {
    id: 2,
    name: 'Nayo',
    email: 'nayo@nayo.com'
  },
  {
    id: 3,
    name: 'Amrit',
    email: 'amrit@amrit.com'
  }
];

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

// Public methods. Build out these functions as necessary
// The first two have been done for you!
exports.getAll = function () {
  return users;
};

exports.setAll = function (newUsers) {
  users = newUsers;
  nextId = newUsers.length + 1;
  return newUsers;
};

exports.getOne = function (id) {
  for(var i=0;i<users.length;i++){
    if (id===users[i].id) {
      return users[i];
    } else {
      return null
    }
  }
};

exports.addOne = function (user) {
  return users.push(user);

};

exports.updateOne = function (id, newProperties) {
  for(var i=0;i<users.length;i++){
    if (id===users[i].id) {
      return users[i].newProperties= newProperties;
    }
};

exports.deleteOne = function (id) {
  for(var i=0;i<users.length;i++){
    if (id===users[i].id) {
      return users[i].splice(users[i],1)
    }
  }
};
