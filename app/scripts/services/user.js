'use strict';

angular.module('testprojektApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id', {
      id: '@id'  //paramter
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {}
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
