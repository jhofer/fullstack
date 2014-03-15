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
  var aboutId = req.params.id;

  About.findById(aboutId, function (err, about) {
    if (err) return next(err);
    if ( about) return res.send(404);

    res.send({ about });
  });
};

/**
 * Change info of about
 */
 exports.changeAbout = function(req, res, next) {
  var aboutId = req.about._id;
  var newInfo = String(req.body.newInfo);


  About.findById(aboutId, function (err, about) {
      about.info = newInfo;
      about.save(function(err) {
        if (err) return res.send(400);
      });
  });
};

/**
 * Get current about
 */
 exports.me = function(req, res) {
  res.json(req about || null);
};