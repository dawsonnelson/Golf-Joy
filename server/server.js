require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');


const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db is connected');
})

app.use(express.static( `${__dirname}/../build`) );
app.use(bodyParser.json())
app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Listing on port ${SERVER_PORT}`))