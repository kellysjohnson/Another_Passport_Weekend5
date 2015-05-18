var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

/* GET users listing. */                                                      //how do I have two get function in user?
                                                                              // with two gets, the second get is the one that works...
router.get('/', function (req, res, next){
    if (req.isAuthenticated()) {
        res.sendFile(path.resolve(__dirname, '../views/users.html'));
    }
});

router.get('/getData', function (req, res, next){                           //This path was created, first instance here.
                                                                            //This path is created, named, then user information is searched
    if (req.isAuthenticated()) {
        //Users.find({username: new RegExp(req.user.username, 'i')}, "username firstname lastname email", function(err, callback){
        //Users.find({}, "username firstname lastname email", function(err, callback){
        Users.find({}, null, function(err, callback){                      // Users.find... looks in ../models/user.  This requires UserSchema, and mongoose, which talks to MongoDB
            res.json(callback);                                            // register.html will do a form "post" with the information that the UserSchema requires
        });                                                                // ??? What would happen if our form "post" did not include the required information for the UserSchema?
    }
});

module.exports = router;
