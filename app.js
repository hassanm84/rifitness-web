//jshint esversion:6
require('dotenv').config();
const express =  require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const servicesRouter = require('./routes/services');
const mediaRouter = require('./routes/media');
const contactRouter = require('./routes/contact');
const path=require("path");
const expressValidator = require('express-validator');
const nodemailer = require("nodemailer");


const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/about', express.static(__dirname + '/public'));
app.use('/services', express.static(__dirname + '/public'));
app.use('/media', express.static(__dirname + '/public'));
app.use('/contact', express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/services', servicesRouter);
app.use('/media', mediaRouter);
app.use('/contact', contactRouter);

const today = new Date();
const year = today.getFullYear();


app.use(function (req, res, next) {
  res.status(404).render('404', {title: "Page Not Found | RiFitness", l2BannerHeading1:"Page Not Found", copyrightYr: year});
});



app.listen(3000, '127.0.0.1', function(){
  console.log("Server started 🚀on port 3000.");
});
