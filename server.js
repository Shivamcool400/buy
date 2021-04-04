const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/models');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



mongoose.connect("mongodb+srv://new_user31:shashi1967@buyexperts.wdiuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true})
.then(() => console.log('Database connected'))
.catch((err) => console.log(err));


app.post('/contactus', (req, res) => {
    const {name, email, message} = req.body;
    User({
        name,
        email,
        message
    }).save((err,data) => {
        if(err) throw err;

    })
});



app.listen(PORT, () => {
    console.log('App started successfully', PORT);
});

