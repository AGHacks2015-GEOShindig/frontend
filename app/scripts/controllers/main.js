'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', ['$scope', 'dataFactory', 'Slug', function ($scope, dataFactory, Slug) {
    $scope.selectedCity = undefined;
    $scope.maxDistance = undefined;
    $scope.searchHasBeenTrigered = false;

    $scope.cities= [
      'Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz',
      'Lublin', 'Katowice', 'Białystok', 'Gdynia', 'Częstochowa', 'Radom', 'Sosnowiec',
      'Toruń', 'Kielce', 'Rzeszów', 'Gliwice', 'Zabrze', 'Olsztyn', 'Bielsko-Biała',
      'Bytom', 'Ruda Śląska', 'Rybnik', 'Zielona Góra', 'Tychy', 'Gorzów Wielkopolski',
      'Dąbrowa Górnicza', 'Elbląg', 'Płock', 'Opole', 'Wałbrzych', 'Włocławek', 'Tarnów',
      'Chorzów', 'Koszalin'
    ];

    $scope.search = function () {
      searchEvents($scope.selectedCity, $scope.maxDistance);
    };

    function searchEvents(city, maxDistance) {
      $scope.searchHasBeenTrigered = true;
      dataFactory.searchEvents(city, maxDistance)
        .success(function (custs) {
          $scope.friends = custs.hits;
        })
        .error(function (error) {
          console.log('Unable to load customer data: ' + error.message);
          $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }
  }]);
