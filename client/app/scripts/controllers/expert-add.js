/**
 * @ngdoc function
 * @name clientApp.controller:ExpertAddCtrl
 * @description
 * # ExpertAddCtrl
 * Controller of the clientApp
 */
'use strict';

angular.module('clientApp').controller('ExpertAddCtrl', function(
  $http,
  $scope,
  Expert,
  $location
) {
  $scope.expert = {};
  $scope.saveExpert = function() {
    //console.log('expert saving loading');
    //console.log($scope.expert);
    $http.post('http://localhost:3000/expert', angular.toJson($scope.expert));
    $scope.expert = {};
    /*Expert.post($scope.expert).then(function() {
      //$location.path('/experts');
    });*/
  };
});
