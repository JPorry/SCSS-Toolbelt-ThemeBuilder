'use strict';
angular.module('baseProject')
    .controller('sidebarCtrl', function(Styles){
        var sidebar = this;
        sidebar.styles = Styles;

        sidebar.sectionsStatus = {
            general: true,
            toolbar: false
        };

        sidebar.deleteValue = function(value){
            delete sidebar.styles[value];
        };

        sidebar.toggle = function(target){
            sidebar.sectionsStatus[target] = !sidebar.sectionsStatus[target];
        };

    });