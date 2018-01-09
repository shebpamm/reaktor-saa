var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

function add(temperature) {

}

var weatherSchema   = new Schema({
    location : String,
    temperatures : []
});

module.exports = mongoose.model('weather', weatherSchema);
