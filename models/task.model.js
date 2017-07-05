var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Tasks', new Schema({
    title: String,
    done: Boolean,
    date: {type: Date, default: Date.now()}
}));