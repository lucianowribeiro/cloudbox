const express = require('express')
const mongoose = require('mongoose')

const app = express() //Module imported of the express as function

mongoose.connect(
    'mongodb+srv://luciano:luciano@cluster0.dsoyw.mongodb.net/cloudbox?retryWrites=true&w=majority',
    { useNewUrlParser: true , useUnifiedTopology: true }   
)
app.use(express.json()) //Middlware that allow to use json format for rest api
app.use(express.urlencoded({extend: true,type:"application/x-www-form-urlencoded"})) //Middlware that allow to work with file inside of the express

app.use(require('./routes')) //call the routes file

app.listen(3333) //Set the port listened