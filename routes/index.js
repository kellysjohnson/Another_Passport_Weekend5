var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.post('/', passport.authenticate('local', {
      successRedirect: '/users',
      failureRedirect: '/'
})
);

//UserSchema.set('500', function(err, req, res, next) { (...) console.log(err.errors) res.err(err, title, message); });

module.exports = router;
