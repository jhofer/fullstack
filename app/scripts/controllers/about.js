'use strict';

angular.module('testprojektApp')
	.controller('AboutCtrl', function ($scope, $http) {


//	$scope.abouts = ['sali ich bin de jonas und ich mach do top modärni sache. yay','und nomel eis', 'es tuet. OLE'];
	
	$scope.create = function(form) {
      $scope.submitted = true;
  
      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };


	$http.get('/abouts/list').success(function(abouts) {
		$scope.abouts = abouts;
	});
});
