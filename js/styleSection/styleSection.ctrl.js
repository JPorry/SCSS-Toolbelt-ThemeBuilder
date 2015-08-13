'use strict';
angular.module('baseProject')
    .controller('styleSectionCtrl', ["Styles", function(Styles){
        var styles = this;
        styles.styles = Styles
    }]);