var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

/* GET users listing. */                                                      //how do I have two get function in user?
                                                                              // with two gets, the second get is the one that works...
router.get('/', function (req, res, next){
  res.json(req.isAuthenticated());
});

router.get('/register', function(req, res, next){
  res.sendFile(path.resolve(__dirname, '../views/users.html'));
});

router.post('/', passport.authenticate('local', {
      successRedirect: '/users',
      failureRedirect: '/'
    })
);

module.exports = router;
