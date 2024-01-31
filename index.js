const express = require('express');
const port = 7001;
const db = require('./config/dbconnection');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: false }));

//routing
app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        console.log("error in creating port",err);
    }
    console.log('Successfully port is up : ',port);
})