'use strict';
angular.module('baseProject')
    .controller('styleSectionCtrl', ["Variables", function(Variables){
        var styles = this;
        styles.variables = Variables;
    }]);