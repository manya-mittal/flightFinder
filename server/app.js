const express = require('express');
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/homeRoutes.js');
const flightRoutes = require('./routes/flightRoutes')


const app = express();

app.use(bodyParser.json());


app.use('/', homeRoutes)
app.use('/api/flights', flightRoutes)

app.listen(5000, function(){
    console.log('Server started on port 5000');
});

