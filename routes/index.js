var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const messages = [
    {
      text: "Hello!",
      user: "Amanda",
      added: new Date()
    },
    {
      text: "Hello!",
      user: "Josh",
      added: new Date()
    },
    {
      text: "Hello!",
      user: "Adam",
      added: new Date()
    },
    {
      text: "Hello!",
      user: "Kyle",
      added: new Date()
    },
  ]


  res.render('index', { title: 'Express', messages });
});

module.exports = router;
