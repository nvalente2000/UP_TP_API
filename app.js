const express = require("express"); 
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./api/routes/router"); 
const createRoles = require("./api/config/initialSetup");

// Load enviroment file
require('dotenv').config(); 

// Connect Mongo
const conn = require("./api/config/db"); 
conn();

// App 
const app = express();          
createRoles();

// Midleware
app.use(express.json());   

// Routes
app.use("/api", routes); 

// Listening API
const port = process.env.PORT; 
app.listen( port, err => {                               
    if (err) return console.log(err);
    console.log(`App Runnig on the port: ${port}`); 
});
                                                

