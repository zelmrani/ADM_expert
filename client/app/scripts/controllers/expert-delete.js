'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ExpertDeleteCtrl
 * @description
 * # ExpertDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ExpertDeleteCtrl', function (
  $scope,
  $routeParams,
  Expert,
  $location
) {
  $scope.expert = Expert.one($routeParams.id).get().$object;
  $scope.deleteExpert = function() {
    $scope.expert.remove().then(function() {
      $location.path('/experts');
    });
  };
  $scope.back = function() {
    $location.path('/expert/' + $routeParams.id);
  };
});
