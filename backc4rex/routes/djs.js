const express = require('express');
const router = express.Router();

const djsController = require('../controller/djsControllers')

router.get('/',
    djsController.getDjs
);


module.exports = router;