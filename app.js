const path = require('path');
//const expressEdge = require('express-edge'); // outdated?
const { config, engine } = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
// const Post = require('./backend/database/db-models/Post');

const app = new express();

// THIS NEEDS TO BE CHANGED IF CSS FILES MOVE IN APP.JS
// app.use(express.static(__dirname + '/frontend/public'));
//app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect('mongodb+srv://timmyglynnv3:westmoreland@mep0-jfvcw.mongodb.net/mepDB?retryWrites=true&w=majority', 
// { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => 'You are now connected to Mongo!')
//     .catch(err => console.error('Something went wrong', err))

app.use(express.static(__dirname + '/public'));
app.use(fileUpload());
app.use(engine);


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});



// for cloud 
// app.listen(8080, () => {
//     console.log('App listening on port 8080')
// });

// for local testing 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});