var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var registarSchema = new Schema({
  user:  String,
  password: String,
  phone: String,
  email: String,
  place: String,
});

module.exports = mongoose.model("registar",registarSchema);




