'use strict';
angular.module('baseProject')
    .controller('styleSectionCtrl', function(Variables){
        var styles = this;
        styles.variables = Variables.variables;
    });