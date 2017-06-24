

var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    id: Number,
    title: String,
    url: String,
    class: String,
    start: Number,
    end: Number,
    details: String
  });

eventSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model("event",eventSchema);


