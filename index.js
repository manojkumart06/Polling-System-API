const express = require('express');
const app = express();
const db = require('./config/dbconnection');

app.use(express.urlencoded({extended : false}));

app.use('/', require('./routes/'))

app.listen(7000, (err)=>{
    if(err){
        console.log("Error Connecting to Server!");
        return
    }

    console.log("Successfully Connected to Server! 7000");
})