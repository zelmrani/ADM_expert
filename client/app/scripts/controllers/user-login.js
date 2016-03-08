'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserLoginCtrl', function($http, $rootScope, $scope, User, $location) {
    $scope.users = User.getList().$object;
    $scope.searchUser = function(email, password) {
      var requete = 'http://localhost:3000/user?Email=' + email + '&password=' + password;
      $http.get(requete).success(function(data) {
        //alert(!jQuery.isEmptyObject(data));
        if (!jQuery.isEmptyObject(data)) {
          $rootScope.isLoggedin = true;
          $location.path('/experts');
        } else if (jQuery.isEmptyObject(data)) {
          alert('Wrong username or password');
          $rootScope.isLoggedin = false;
        }

        /*
          alert(jQuery.isEmptyObject(data));
        alert(angular.toJson(data));
        alert(data[0].Email);
        */
      });
    };
  });
