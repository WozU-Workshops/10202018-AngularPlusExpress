var express = require('express');
var router = express.Router();

var users = [
  {id:1,username:'busyrich',status:'still awesome'},
  {id:2,username:'joshua',status:'has guitar'}
];

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.json(users);
});

router.get('/:userId', function(req, res, next) {
  res.json(users.filter(u => u.id == req.params.userId)[0]);
});

router.post('/add', function(req, res, next) {
  var newUser = {
    id: Math.floor(Math.random() * 1000),
    username: req.body.username,
    status: req.body.status
  };

  users.push(newUser);

  res.json({
    success: true,
    newUser
  });
});

module.exports = router;
