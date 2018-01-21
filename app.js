const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const log = require('log');
const mongoose = require('mongoose');
var Weather = require('./models/weather');

//Startup

logger = new log('info');

logger.info('Starting Up...')

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.use(function(req, res, next) {
    logger.debug('Request Got.')
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
  res.json({ message : 'Yaya! Hello World!' });
})

router.route('/weathers').post(function(req, res) {

  var weather = new Weather();

  logger.info(req.body)

  weather.location = req.body.location;
  weather.temperatures = req.body.temperatures;
  weather.coords = req.body.coords;

  weather.save(function(err) {
    if (err)
        res.send(err);

    res.json({ message: 'Weather created.'})
  });

});

router.route('/weathers').get(function(req, res) {

  Weather.find(function(err, weathers){
    if (err) res.send(err);

    res.json(weathers);
  })

});

router.route('/weathers/:weather_id')

    //REST Get
    .get(function(req, res) {
        Weather.findById(req.params.weather_id, function(err, weather) {
            if (err) res.send(err);
            res.json(weather);
        });
    })

    //REST Put
    .put(function(req, res) {

      logger.debug(req.params.weather_id)
      Weather.update(
        { _id: req.params.weather_id },
        { $push: {temperatures : req.body.temperatures} },

        function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'Weather updated.' });
        });
    })

    //REST Delete
    .delete(function(req, res){
      Weather.remove(
        { _id: req.params.weather_id },
        function(err, weather) {
          if (err) res.send(err);

          res.json({ message: 'Weather deleted.' });
        }
      )
    })
app.use('/api', router)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/html/index.html'));
})

app.get('*.html', function (req, res) {
  logger.info(req.originalUrl)
  res.sendFile(path.join(__dirname + '/client/html/' + req.originalUrl));
})

app.get('*.css', function (req, res) {
  logger.info(req.originalUrl)
  res.sendFile(path.join(__dirname + '/client/css/' + req.originalUrl));
})

app.get('*.js', function (req, res) {
  logger.info(req.originalUrl)
  res.sendFile(path.join(__dirname + '/client/js/build/' + req.originalUrl));
})

app.get('/resources/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/' + req.originalUrl));
})

app.listen(80);

logger.debug('Started up.')

var promise = mongoose.connect('mongodb://127.0.0.1', {useMongoClient: true,});

/*Copyright (c) 2018 Erik Karsten

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
