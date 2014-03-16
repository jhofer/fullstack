'use strict';

var should = require('should'),
    app = require('../../../server'),
    mongoose = require('mongoose'),
    About = mongoose.model('About');

var about;

describe('About Model', function() {
  before(function(done) {
    about = new About({
      info: 'Fake About'
    });

    // Clear abouts before testing
    About.remove().exec();
    done();
  });

  afterEach(function(done) {
    About.remove().exec();
    done();
  });

  it('should begin with no abouts', function(done) {
    About.find({}, function(err, abouts) {
      abouts.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate about', function(done) {
    about.save();
    var userDup = new About(about);
    userDup.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without an info', function(done) {
    about.info = '';
    about.save(function(err) {
      should.exist(err);
      done();
    });
  });


});