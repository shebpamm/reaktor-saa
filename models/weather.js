var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

function add(temperature) {
  
}

var weatherSchema   = new Schema({
    location : String,
    temperatures : [] //Aliases did not seem to work so using id's for datatypes double and timestamp
});

module.exports = mongoose.model('weather', weatherSchema);
