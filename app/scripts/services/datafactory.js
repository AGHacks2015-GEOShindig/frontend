'use strict';

/**
 * @ngdoc service
 * @name frontendApp.dataFactory
 * @description
 * # dataFactory
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://127.0.0.1:5000/';
    var dataFactory = {};

    dataFactory.searchEvents = function (city, maxDistance) {
      return $http.get(urlBase + 'search/?city='+ city + '&distance=' + maxDistance);
    };

    return dataFactory;
  }]);
