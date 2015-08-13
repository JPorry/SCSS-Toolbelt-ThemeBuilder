'use strict';
angular.module('baseProject', ['ui.router', 'angularSpectrumColorpicker'])
    .config(function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '':{
                        controllerAs: 'home',
                        templateUrl: 'home/_home.html',
                        controller: 'homeCtrl'
                    },
                    sidebar: {
                        controllerAs: 'sidebar',
                        controller: 'sidebarCtrl',
                        templateUrl: 'sidebar/_sidebar.html'
                    },
                    styles: {
                        controllerAs: 'styles',
                        controller: 'styleSectionCtrl',
                        templateUrl: 'styleSection/_styleSection.html'
                    }
                }
            });
    });