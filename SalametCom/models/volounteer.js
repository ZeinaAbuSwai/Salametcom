var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var volounteerSchema = new Schema({
  user:  String,
  password: String,
  phone: String,
  email: String,
  place: String,
});

module.exports = mongoose.model("Volounteer",volounteerSchema);




