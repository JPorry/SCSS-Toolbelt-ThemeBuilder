'use strict';
angular.module('baseProject')
    .factory('Variables', function(){

        var variables = {
            $darkColor: '#2C3E50',
            $lightColor: '#ECF0F1',
            $contrastColor: '#F39C12',
            $midtone: '#BDC3C7',

            $darkTextColor: '#000',
            $lightTextColor: '#fff',

            $primaryColor: '#3498DB',
            $secondaryColor: '#F39C12',
            $dangerColor: '#E74C3C',
            $infoColor: '#1ABC9C',
            $warningColor: '#F1C40F',
            $disabledColor: '#BDC3C7'
        };

        return variables;

    });