'use strict';

/**
 * @ngdoc function
 * @name villageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the villageApp
 */
angular.module('villageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
