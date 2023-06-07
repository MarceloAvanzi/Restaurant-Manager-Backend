require('./database/db_connection.js');
require('dotenv/config');

const express = require('express'); // or import express from 'express' if you put  "type": "module" to package.json
const app = express();
const port = process.env.PORT || 8000;

// Calling routes and passing the app from express as parameter to be used
require('./routes/config.routes.js')(app);
require('./routes/meal.routes.js')(app);
require('./routes/user.routes.js')(app);

// App is running
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})