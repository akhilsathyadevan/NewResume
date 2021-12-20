const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const profile_data = require('./src/model/profile');
const signup_data = require('./src/model/signup');
var app = new express();
app.use(cors());
app.use(bodyparser.json());






 
app.listen(3300,function(){
    console.log("server ready at port number 3300")
});