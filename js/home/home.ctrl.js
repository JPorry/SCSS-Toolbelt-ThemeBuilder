'use strict';
angular.module('baseProject')
    .controller('homeCtrl', ["SideBar", function(SideBar){
        var home = this;

        home.sidebar = SideBar.status;
    }]);