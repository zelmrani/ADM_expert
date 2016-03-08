/**
 * @ngdoc function
 * @name clientApp.controller:ExpertsCtrl
 * @description
 * # ExpertsCtrl
 * Controller of the clientApp
 */
'use strict';
angular.module('clientApp')
  .controller('ExpertsCtrl', function ($scope,Expert) {
    $scope.orderByField='Name';
    $scope.reverseSort=false;
    $scope.experts=Expert.getList().$object;
  });
/* 
//Keep this version after testing
angular.module('clientApp')
  .controller('ExpertsCtrl', function ($scope,Expert) {
    $scope.experts = Expert.getList().$object;
  });
*/



//////// Working  version: PUT BACK IF THE TEST FAILS
/*
angular.module('clientApp')
  .controller('ExpertsCtrl', function ($scope) {
    $scope.orderByField='Name';
    $scope.reverseSort=false;
    $scope.experts=[
        {
            Name:'toto1',
            Surname:'toto1sur',
            Email:'toto1@gmail.com',
            Phone:'0600112233',
            SGM:'RAS',
            Skills:'JAVA'
        },
        {
            Name:'toto2',
            Surname:'toto2sur',
            Email:'toto2@gmail.com',
            Phone:'0644332211',
            SGM:'RAS',
            Skills:'C'
        },  
        {
            Name:'toto3',
            Surname:'toto3sur',
            Email:'toto3@gmail.com',
            Phone:'0644332212',
            SGM:'RAS',
            Skills:'PHP'
        },  
        {
            Name:'toto4',
            Surname:'toto4sur',
            Email:'toto4@gmail.com',
            Phone:'0644332213',
            SGM:'RAS',
            Skills:'Python'
        },          
    ];
  });
*/