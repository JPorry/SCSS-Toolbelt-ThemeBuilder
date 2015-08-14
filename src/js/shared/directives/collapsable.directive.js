'use strict';
angular.module('baseProject')
    .directive('collapsable', function(){
        return {
            restrict: 'E',
            scope: {
                title: '@',
                open: '@'
            },
            replace: true,
            controller: function($scope){
                $scope.toggle = function(){
                    $scope.open = !$scope.open;
                };
            },
            transclude: true,
            template:
                '<div>' +
                    '<h2 ng-click="toggle()" ng-class="{open: open}">{{title}}</h2>' +
                    '<div ng-show="open" ng-transclude></div>' +
                '</div>'
        };
    });