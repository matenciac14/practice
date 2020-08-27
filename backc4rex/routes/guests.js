const express = require('express');
const router = express.Router();

const GuestsController = require('../controller/guestsControllers')

router.get('/',
    GuestsController.getGuests
)


module.exports = router;