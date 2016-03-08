'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/#', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/experts', {
        templateUrl: 'views/experts.html',
        controller: 'ExpertsCtrl'
      })
      .when('/create/expert', {
        templateUrl: 'views/expert-add.html',
        controller: 'ExpertAddCtrl'
      })
      .when('/find/expert', {
        templateUrl: 'views/expert-find.html',
        controller: 'ExpertFindCtrl'
      })
      .when('/expert/:id', {
        templateUrl: 'views/expert-view.html',
        controller: 'ExpertViewCtrl'
      })
      .when('/expert/:id/edit', {
        templateUrl: 'views/expert-edit.html',
        controller: 'ExpertEditCtrl'
      })
      .when('/expert/:id/delete', {
        templateUrl: 'views/expert-delete.html',
        controller: 'ExpertDeleteCtrl'
      })
      .when('/login', {
        templateUrl: 'views/user-login.html',
        controller: 'UserLoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .factory('ExpertRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Expert', function(ExpertRestangular) {
    return ExpertRestangular.service('expert');
  })

  .factory('UserRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('User', function(UserRestangular) {
    return UserRestangular.service('user');
  })

