'use strict';

angular.module('clientApp')
  .controller('ExpertFindCtrl', function ($scope,Expert) {
    $scope.experts=Expert.getList().$object;
  });

/*
angular.module('clientApp')
  .controller('ExpertFindCtrl', function($scope) {
    $scope.experts = [{
      Name: 'toto1',
      Surname: 'toto1sur',
      Email: 'toto1@gmail.com',
      Phone: '0600112233',
      SGM: 'RAS',
      Skills: 'JAVA'
    }, {
      Name: 'toto2',
      Surname: 'toto2sur',
      Email: 'toto2@gmail.com',
      Phone: '0644332211',
      SGM: 'RAS',
      Skills: 'C'
    }, {
      Name: 'toto3',
      Surname: 'toto3sur',
      Email: 'toto3@gmail.com',
      Phone: '0644332212',
      SGM: 'RAS',
      Skills: 'PHP'
    }, {
      Name: 'toto4',
      Surname: 'toto4sur',
      Email: 'toto4@gmail.com',
      Phone: '0644332213',
      SGM: 'RAS',
      Skills: 'Python'
    }, {
      Name: 'toto5',
      Surname: 'toto5sur',
      Email: 'toto5@gmail.com',
      Phone: '0644378213',
      SGM: 'RAS',
      Skills: 'JAVA'
    }];
  });
*/


//Useless FILTER
/*
angular.module('clientApp')
  .filter('ConsultantFilter', [function($filter) {
    return function(inputArray, searchCriteria, Skills) {
      if (!angular.isDefined(searchCriteria) || searchCriteria == '') {
        return inputArray;
      }
      var data = [];
      angular.forEach(inputArray, function(item) {
        if (item.Skills == Skills) {
          if (item.Name.toLowerCase().indexOf(searchCriteria.toLowerCase()) != -1) {
            //item.expert
            data.push(item);
          }
        }
      });
      return data;
    };
  }]);
*/