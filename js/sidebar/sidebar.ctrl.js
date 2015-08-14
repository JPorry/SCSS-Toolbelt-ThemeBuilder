'use strict';
angular.module('baseProject')
    .controller('sidebarCtrl', ["Variables", "SideBar", function(Variables, SideBar){
        var sidebar = this;
        sidebar.styles = Variables.variables;

        sidebar.reset = Variables.reset;

        sidebar.generateThemeFile = Variables.generateThemeFile;

        sidebar.sidebar = SideBar.status;

        sidebar.toggle = SideBar.toggle;
    }]);