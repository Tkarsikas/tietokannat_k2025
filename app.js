var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var opintojaksoRouter = require('./routes/opintojakso');
var opiskelijaRouter = require('./routes/Opiskelija');
var opiskelija_opintojaksoRouter = require('./routes/opiskelija_opintojakso');
var aliohjelmatRouter = require('./routes/aliohjelmat');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/opintojakso', opintojaksoRouter);
app.use('/opiskelija', opiskelijaRouter);
app.use('/opiskelija_opintojakso', opiskelija_opintojaksoRouter);
app.use('/aliohjelmat', aliohjelmatRouter);

app.get('/example',
    function(request,response){
        response.send('Terveterve');
        console.log('Heippa!');
    }
);

module.exports = app;
