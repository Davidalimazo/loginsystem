//Project dependencies

require('dotenv').config()
const express = require('express');
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose');
const {v4:uuidv4} = require('uuid')
const morgan = require('morgan')
const router = require('./router/router')

//initialize the app
const app = express()

//middle ware
app.use(cors())
app.use(morgan('combined'))
//my own custom middle ware
// const my_mw=((req, res, next)=>{
//     console.log('my middleware Logged');
//     next()
// })
// app.use(my_mw)
//end of own custom middle ware

//set up session

// app.use(session({
//     secret: uuidv4(),
//     resave:true,
//     saveUninitialized:true
// }))
// app.use(cookies())

let public_path = path.resolve(__dirname, 'public');
app.use(public_path,express.static('static'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//set up mongodb database

mongoose.connect(process.env.DB, {useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connection.once('open', ()=>console.log('connected to database')).on('err', (err)=>console.log('Error connecting to database ' + err))
let port = process.env.PORT || 3002;

//declare the api using router
app.use('/api', router)

//server is now live
app.listen(port, ()=>{
    console.log('App is listening to request on port ' + port);
})
