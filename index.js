const express = require('express');
const port = 7001;
const app = express();
const db = require('./config/dbconnection');

app.use(express.urlencoded({extended : false}));

app.use('/', require('./routes/'))

app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log('Your server is running on port', port);
    }
});