const express = require('express');
const cors = require('cors');
//create server

const app = express();

app.use(cors())
app.use(express.json({extended: true}));
const port = process.env.port || 4000;

app.use('/djs', require('./routes/djs'));
app.use('/favorite', require('./routes/djsFav'));
app.use('/guests', require('./routes/guests'));

app.listen(port, () => {
    console.log('corriendo en el puerto ' + port)
})