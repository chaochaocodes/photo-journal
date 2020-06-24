const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// MIDDLEWARE
// bodyParser run every time we hit a request
app.use(bodyParser.json());

// IMPORT ROUTES
const entriesRoute = require('./routes/entries');
app.use('/entries', entriesRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('Home page')
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to DB!')
);

// Listen to server
app.listen(3000);
