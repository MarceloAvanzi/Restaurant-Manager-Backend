require('./Database/db_connection.js');
require('dotenv/config');

const express = require('express'); // or import express from 'express' if you put  "type": "module" to package.json
const app = express();
const port = process.env.PORT || 8000;

// Calling routes and passing the app from express as parameter to be used
require('./Routes/config.routes.js')(app);
require('./Routes/meal.routes')(app);
require('./Routes/user.routes.js')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})