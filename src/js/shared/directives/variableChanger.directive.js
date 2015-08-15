'use strict';
angular.module('baseProject')
    .directive('variableChanger', function(){
        return {
            restrict: 'E',
            scope: {
                variable: '@',
                specific: '@',
                label: '@'
            },
            replace: true,
            controller: function($scope, Variables){

                $scope.variables = Variables.variables;

                $scope.deleteValue = function(){
                    delete $scope.variables[$scope.variable];
                };
            },
            template:
                '<label class="input" ng-class="{overwritten: specific && variables[variable]}">{{label || variable}}' +
                    '<button ng-if="specific" class="small icon" ng-disabled="!variables[variable]" ng-click="deleteValue()"><i class="fa fa-trash-o"></i></button>'+
                    '<spectrum-colorpicker ng-model="variables[variable]" options="{showInput: true, preferredFormat: \'hex\', showAlpha: true}"></spectrum-colorpicker>' +
                '</label>'
        };
    });