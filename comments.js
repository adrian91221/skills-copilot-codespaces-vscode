// Create web server
var express = require('express');
var app = express();

// Create web server
var express = require('express');
var app = express();

// Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    res.json(comments);
  });
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});