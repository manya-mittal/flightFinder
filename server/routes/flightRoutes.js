const express = require('express');
const flightControllers = require('../controllers/flightControllers.js')

const router = express.Router();


router.get('/', flightControllers.getFlights);


module.exports = router;
