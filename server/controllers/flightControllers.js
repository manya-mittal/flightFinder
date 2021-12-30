
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
    clientId: 'WgR7GkzKVqwiF3KJax6J3LAr5LAL2lTC',
    clientSecret: 'nxgRaO4VnobiHI1C'
  });



const getFlights = (req,res) => {
    const {to, from, depart, returning, passengers} = req.body

    console.log(req.body);

    // Find the cheapest flights 
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: from,
        destinationLocationCode: to,
        departureDate: depart,
        adults: passengers
    }).then(function (response) {


        const flights = []

        for (let j = 0; j < 20; j++) {
                // converts the first flight's route into an array of json objects
            const route = []
            for (let i = 0; i < response.data[j].itineraries[0].segments.length; i++) {
                const from = response.data[j].itineraries[0].segments[i].departure.iataCode
                const to = response.data[j].itineraries[0].segments[i].arrival.iataCode
                route[i] = {from, to}
            }

            const duration = response.data[j].itineraries[0].duration.substring(2)

            const stops = route.length - 1

            const price = response.data[j].price.grandTotal
        
            flights[j] = {route, duration, stops, price}
            console.log(flights[j]);
        }
        console.log(flights);
        
        
        
        res.send(flights);
        // res.send(response);
        
    }).catch(function (response) {
        console.error(response);
    });
}

exports.getFlights = getFlights;