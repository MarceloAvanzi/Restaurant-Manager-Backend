import express from 'express'; // or const express = require('express') if you remove the "type" from package.json
import mongodb_connect from './Database/db_connection.js';

// variables declaring
const app = express();

// Connecting to Databse on mongodb
mongodb_connect.call()

app.get('/', (req, res) => { // First the path then the fallback function
    res.send('Hi mates!!')
    console.dir(req.hostname)
});

app.get('/api/orders', (req, res) => {
    res.send([1,2,3])
})

app.get('/api/orders/:id', (req, res)  => {
    const id = req.params.id
    res.send(id)
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})