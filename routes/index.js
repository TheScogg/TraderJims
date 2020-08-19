var express = require('express');
var router = express.Router();
var path = require('path');


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  }, 
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: (path.join(__dirname, '../public')) });
});

router.get('/help', function(req, res, next) {
  // res.send('help');
  res.sendFile('index.html');
});

module.exports = router;
