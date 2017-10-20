const fs = require("fs");
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static('public'))

process.on('uncaughtException', function (err) {
  console.log(err);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/comic', function (req, res) {
  fs.readdir('./public', (err, files) => {
    var data = [];
    files.forEach(file => {
      var info = file.split("_");
      if (info.length > 2) {
        var json = { "name": info[0], "desc": info[1], "imagePath": file };
        data.push(json);
      }
    });
    res.jsonp(data);
  })
});

app.post('/comic', function (req, res) {
  var imageData = req.body.imgData;
  imageData = imageData.replace(/^data:image\/\w+;base64,/, '');

  var d = new Date();
  var name = './public/' + req.body.name + '_' + req.body.description + '_' + d.getTime() + '.png';
  fs.writeFile(name, imageData, { encoding: 'base64' }, function (err) {
    if (err) {
      res.jsonp({ "result: ": false });
    }

    res.jsonp({ "result: ": true });
  });
});

app.get('/', function (req, res) {
  console.log(req);
  res.jsonp({ "message: ": "Yeeeeeee Boiiiii!" });
});

var users = [];
app.post('/signup', function(req, res){
  let user = {
      email: req.body.email,
      password: req.body.password
  };
  
  if(user.email.length>3 && user.password.length>3) {
    users.push(user);
    res.json({"success": true});
  } else {
    res.json({"success": false});
  }
});

app.post('/signin', function(req, res){
  let user = {
      email: req.body.email,
      password: req.body.password
  };
  
  if(user.email.length>3 && user.password.length>3) {
    res.json({"success": true});
  } else {
    res.json({"success": false});
  }
});

const port = 9999;
app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});