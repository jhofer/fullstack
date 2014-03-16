'use strict';

angular.module('testprojektApp')
.controller('NavbarCtrl', function ($scope, $location, Auth) {
  $scope.menu = [{
    'title': 'Home',
    'link': '/'
  }, {
    'title': 'Settings',
    'link': '/settings'
  },{
    'title': 'About',
    'link': '/about'
  }];
  
  $scope.logout = function() {
    Auth.logout()
    .then(function() {
      $location.path('/login');
    });
  };
  
  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
