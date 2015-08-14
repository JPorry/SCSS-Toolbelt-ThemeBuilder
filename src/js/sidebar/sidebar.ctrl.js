'use strict';
angular.module('baseProject')
    .controller('sidebarCtrl', function(Variables){
        var sidebar = this;
        sidebar.styles = Variables.variables;

        sidebar.reset = Variables.reset;

        sidebar.generateThemeFile = Variables.generateThemeFile;
    });