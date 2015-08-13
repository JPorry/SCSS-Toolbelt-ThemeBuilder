'use strict';
angular.module('baseProject', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                controllerAs: 'home',
                templateUrl: 'home/_home.html',
                controller: 'homeCtrl'
            });
    });