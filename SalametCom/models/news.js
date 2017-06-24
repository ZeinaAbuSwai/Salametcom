var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  news: String,
  date: String

});


module.exports = mongoose.model("News",NewsSchema);