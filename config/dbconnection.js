const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/polling system api');

const db= mongoose.connection;
db.on("error", console.error.bind(console,"Error in connection to Mongodb"));


db.once("open", function(){
    console.log("Successfully connected to Database :: MongoDB");
});

module.exports =db;