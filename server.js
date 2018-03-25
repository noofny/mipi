var express = require('express');
var app = express();

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World! (sent from my icunt which is actually a raspi running bigknob.js)');
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
