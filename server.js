// Friend Finder application for KU Coding Bootcamp - Michael Haggard

// Dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;



// Bodyparser functions - this is parsing middleware Node library we went over in class
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(bodyParser.json({
    type: "application/vnd.api+json"
})); // Vendor API handling

require(path.join(__dirname, '/app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);

app.listen(PORT, function() { 
    console.log("Listening to PORT: " + PORT);
}); // Listener
