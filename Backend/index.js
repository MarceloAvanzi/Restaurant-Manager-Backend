require('./Database/db_connection.js');
require('dotenv/config');
const express = require('express'); // or import express from 'express' if you put  "type": "module" to package.json
const app = express();
const port = process.env.PORT || 8000;

// Calling routes and passing the app from express as parameter to be used
require('./Routes/meal.routes')(app);

app.get('/', (req, res) => { // First the path then the fallback function
    res.send('Hi mates!!')
    console.dir(req.hostname)
});

app.get('/api/orders/:id', (req, res)  => {
    const id = req.params.id
    res.send(id)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})