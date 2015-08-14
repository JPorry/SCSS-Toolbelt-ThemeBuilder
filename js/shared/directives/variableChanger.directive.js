'use strict';
angular.module('baseProject')
    .directive('variableChanger', function(){
        return {
            restrict: 'E',
            scope: {
                variable: '@',
                specific: '@'
            },
            replace: true,
            controller: ["$scope", "Variables", function($scope, Variables){

                $scope.variables = Variables;

                $scope.deleteValue = function(){
                    delete $scope.variables[$scope.variable];
                };
            }],
            template:
                '<label class="input" ng-class="{overwritten: specific && variables[variable]}">{{variable}}' +
                    '<button ng-if="specific" class="small icon" ng-disabled="!variables[variable]" ng-click="deleteValue()"><i class="fa fa-trash-o"></i></button>'+
                    '<spectrum-colorpicker ng-model="variables[variable]" options="{showInput: true, preferredFormat: \'hex\'}"></spectrum-colorpicker>' +
                '</label>'
        };
    });