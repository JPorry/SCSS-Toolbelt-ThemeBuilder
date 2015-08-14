'use strict';
angular.module('baseProject')
    .controller('sidebarCtrl', function(Variables){
        var sidebar = this;
        sidebar.styles = Variables;
    });