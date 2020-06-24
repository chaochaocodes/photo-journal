const express = require('express');
const app = express();

// MIDDLEWARE
// IMPORT ROUTES
// ROUTES
app.get('/', (req, res) => {
    res.send('Mah Home page!')
})

// Connect to DB


// Listen to server
app.listen(3000);
