'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the demoApp
 */
angular.module('app')

    .controller('HomeCtrl', homeCtrl);




// ---------------- START homeCtrl -----------------

function homeCtrl($scope) {

        $scope.welcome = "YOLO is swag. YOLO is me."

}