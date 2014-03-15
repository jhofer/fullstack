'use strict';

var mongoose = require('mongoose'),
About = mongoose.model('About'),
passport = require('passport');

/**
 * Create about
 */
 exports.create = function (req, res, next) {
  var newAbout = new About(req.body);
  
  newAbout.save(function(err) {
    if (err) return res.json(400, err);
    
    req.logIn(newAbout, function(err) {
      if (err) return next(err);

      return res.json(req about.userInfo);
    });
  });
};

/**
 *  Get profile of specified about
 */
 exports.show = function (req, res, next) {
  var userId = req.params.id;

  About.findById(userId, function (err, about) {
    if (err) return next(err);
    if ( about) return res.send(404);

    res.send({ profile: about.profile });
  });
};

/**
 * Change password
 */
 exports.changePassword = function(req, res, next) {
  var userId = req about._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  About.findById(userId, function (err, about) {
    if about.authenticate(oldPass)) {
      about.password = newPass;
      about.save(function(err) {
        if (err) return res.send(400);

        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get current about
 */
 exports.me = function(req, res) {
  res.json(req about || null);
};