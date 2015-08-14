'use strict';
angular.module('baseProject')
    .controller('sidebarCtrl', ["Variables", function(Variables){
        var sidebar = this;
        sidebar.styles = Variables;
    }]);