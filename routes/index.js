var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Request received for home page");
  res.render('index', { title: 'Pramod\'s' });
});

module.exports = router;
