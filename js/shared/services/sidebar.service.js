'use strict';
angular.module('baseProject')
    .factory('SideBar', function(){

        var status = {
            isOpen: true
        };

        var toggle = function(){
            status.isOpen = !status.isOpen;
        };

        return {
            status: status,
            toggle: toggle
        };

    });