'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ExpertViewCtrl
 * @description
 * # ExpertViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ExpertViewCtrl', function (
  $scope,
  $routeParams,
  Expert
) {
  $scope.viewExpert = true;
  $scope.expert = Expert.one($routeParams.id).get().$object;
});
