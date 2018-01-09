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

    Weather.findById(req.params.weather_id, function(err, weather) {

        if (err) res.send(err);

        logger.info(weather.temperatures)
        weather.temperatures.push(req.body.temperatures);



        weather.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Weather updated.' });
          });

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
  res.sendFile(path.join(__dirname + '/client/index.html'));
})

app.listen(80);

logger.debug('Started up.')

var promise = mongoose.connect('mongodb://127.0.0.1', {useMongoClient: true,});
