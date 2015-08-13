'use strict';
angular.module('baseProject')
    .controller('styleSectionCtrl', function(Styles){
        var styles = this;
        styles.styles = Styles
    });