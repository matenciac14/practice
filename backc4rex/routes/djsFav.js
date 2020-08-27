const express = require('express');
const router = express.Router();

const DjsController = require('../controller/djsControllers')

router.get('/',
    DjsController.getFavoritesDjs
);


module.exports = router;