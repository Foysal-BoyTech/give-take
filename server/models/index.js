const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
