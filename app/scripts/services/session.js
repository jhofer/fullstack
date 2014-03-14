'use strict';

angular.module('testprojektApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
