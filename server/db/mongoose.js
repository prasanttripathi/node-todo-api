var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // to tell mongoose that we want to use built in promise library ,not a 3rd party one
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
