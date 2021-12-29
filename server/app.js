// express stuff here

const express = require('express');
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/homeRoutes.js');
const flightRoutes = require('./routes/flightRoutes')


var Amadeus = require('amadeus');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));


var amadeus = new Amadeus({
    clientId: 'WgR7GkzKVqwiF3KJax6J3LAr5LAL2lTC',
    clientSecret: 'nxgRaO4VnobiHI1C'
  });

// Find the cheapest flights from SYD to BKK
// amadeus.shopping.flightOffersSearch.get({
//     originLocationCode: 'SYD',
//     destinationLocationCode: 'BKK',
//     departureDate: '2022-08-01',
//     adults: '2'
//   }).then(function (response) {
//     console.log(response);
//   }).catch(function (response) {
//     console.error(response);
//   });

app.use('/', homeRoutes)
app.use('/api/flights', flightRoutes)

app.listen(5000, function(){
    console.log('Server started on port 5000');
});

