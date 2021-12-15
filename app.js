const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");

const app = new express();

// THIS NEEDS TO BE CHANGED IF CSS FILES MOVE IN APP.JS
// app.use(express.static(__dirname + '/frontend/public'));
//app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect('mongodb+srv://timmyglynnv3:westmoreland@mep0-jfvcw.mongodb.net/mepDB?retryWrites=true&w=majority', 
// { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => 'You are now connected to Mongo!')
//     .catch(err => console.error('Something went wrong', err))

app.use(express.static('public'));
app.use(fileUpload());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



// for cloud 
app.listen(5000, () => {
    console.log('App listening on port 5000')
});

// for local testing 
// app.listen(4000, () => {
//     console.log('App listening on port 4000')
// });
