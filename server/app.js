const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const studentRoutes = require('../routes/routes.js');

//MIDDLEWARES 
    //JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
    //Routes
app.use('/api', studentRoutes);

//Module creation
module.exports = app;