'use strict';
angular.module('baseProject')
    .controller('homeCtrl', function(SideBar){
        var home = this;

        home.sidebar = SideBar.status;
    });