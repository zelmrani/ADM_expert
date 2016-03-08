/**
 * @ngdoc function
 * @name clientApp.controller:ExpertEditCtrl
 * @description
 * # ExpertEditCtrl
 * Controller of the clientApp
 */
'use strict';


angular.module('clientApp')
  .controller('ExpertEditCtrl', function(
    $scope,
    $routeParams,
    Expert,
    $location
  ) {
    $scope.editExpert = true;
    $scope.expert = {};
    Expert.one($routeParams.id).get().then(function(expert) {
      $scope.expert = expert;
      $scope.saveExpert = function() {
        $scope.expert.save().then(function() {
          $location.path('/expert/' + $routeParams.id);
        });
      };
    });
  });
