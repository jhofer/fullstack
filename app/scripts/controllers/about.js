'use strict';

angular.module('testprojektApp')
  .controller('AboutCtrl', function ($scope, $http) {


$scope.abouts = ["sali ich bin de jonas und ich mach do top modärni sache. yay","und nomel eis", "es tuet. OLE"]


    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
