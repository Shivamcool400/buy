const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('../models/models');
const app = express();
const PORT = process.env.PORT || 5000;



app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb+srv://webexpert:webexpert@cluster0.npqgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true})
.then(() => console.log('Database connected'))
.catch((err) => console.log(err));


app.post('/contactus', (req, res) => {
    const {name, email, message} = req.body;
});



app.listen(PORT, () => {
    console.log('App started successfully', PORT);
});

