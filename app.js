var express = require('express');
var app = express();
var teamFans = require('./team_fan')

 app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function(){
    console.log("We have started our server on port " + app.get('port'));
});

app.use('/fan', teamFans)