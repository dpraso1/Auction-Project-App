const express = require('express');
const mysql = require('mysql');

//DB connection
const connection = require("./src/database/connection");
connection.sync(() => console.log("Tables created"));


const app = express();


app.listen('8080', () => {
    console.log('Server started on port 8080');
});
