
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
    clientId: 'WgR7GkzKVqwiF3KJax6J3LAr5LAL2lTC',
    clientSecret: 'nxgRaO4VnobiHI1C'
  });



const getFlights = (req,res) => {
    const {route, travelTime, stops, price} = req.body

    // Find the cheapest flights from SYD to BKK
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: 'YYZ',
        destinationLocationCode: 'KUL',
        departureDate: '2022-08-01',
        adults: '2'
    }).then(function (response) {
        res.send(response);
        // console.log(response);
    }).catch(function (response) {
        console.error(response);
    });
}

exports.getFlights = getFlights;