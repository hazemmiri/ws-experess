//step 1 : install express
//step 2 : import express
const express = require("express");
const logger = require("./middleware/logger")
//step 3 : init express
const app  = express();

//test server
// app.use((req,res)=>{
    // return res.send("hello world")
// })
app.use(logger)
app.use(express.static(__dirname + "/public"))

//step 4 : declare PORT
const PORT = 5003;
//starting server
app.listen (PORT ,(err)=>{
err? console.log(err):
console.log (`server is running on port ${PORT}`)}) 