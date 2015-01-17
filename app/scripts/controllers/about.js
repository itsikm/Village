'use strict';

/**
 * @ngdoc function
 * @name villageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the villageApp
 */
angular.module('villageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
