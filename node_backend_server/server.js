var fs = require("fs");
const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/comics', function (req, res) {
  var jsonData = fs.readFileSync("data.json", "utf8");
  jsonData = JSON.parse(jsonData);
  res.send(jsonData);
});

var port = 80;
app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});