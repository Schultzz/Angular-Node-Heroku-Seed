'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/Home'});
        $routeProvider.when('/Home', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        });
    }])