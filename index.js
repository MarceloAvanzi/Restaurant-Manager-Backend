require('./src/database/db_connection.js');
require('dotenv/config');

const express = require('express'); // or import express from 'express' if you put  "type": "module" to package.json
const app = express();
app.use(express.json())
const port = process.env.PORT || 8000;

// Calling routes and passing the app from express as parameter to be used
require('./src/routes/config.routes.js')(app);
require('./src/routes/meal.routes.js')(app);
require('./src/routes/user.routes.js')(app);
require('./src/routes/jwt.routes.js')(app);

// App is running
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})