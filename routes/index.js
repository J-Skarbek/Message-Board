var express = require('express');
var router = express.Router();

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

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Mini Message Board', messages });
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user_name,
    added: req.body.date
  });
  res.redirect('/');
});

module.exports = router;
