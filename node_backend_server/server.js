const fs = require("fs");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
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
      if(info.length>2) {
        var json = {"name": info[0], "desc": info[1], "imagePath": file};
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
  var name = './public/'+req.body.name+'_'+req.body.description+'_'+d.getTime()+'.png';
  fs.writeFile(name, imageData, {encoding: 'base64'}, function (err) {
    if (err) {
      res.jsonp({"result: ": false});
    }

    res.jsonp({"result: ": true});
  });
});

app.get('/', function (req, res) {
  console.log(req);
  res.jsonp({"message: ": "Yeeeeeee Boiiiii!"});
});

const port = 9999;
app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});