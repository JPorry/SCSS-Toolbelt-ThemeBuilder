'use strict';
angular.module('baseProject')
    .factory('Variables', function(){

        var defaultVariables = {
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
            $disabledColor: '#BDC3C7',

            '$nonTheme-background-color': '#fff'
        };

        var variables = _.extend({}, defaultVariables);

        function reset(){
            _.forEach(variables, function(val, key){
                variables[key] = defaultVariables[key];
            });
        }

        function generateThemeFile(){

            var scssString = '';

            _.forEach(variables, function(val, key){
                if(key.indexOf('nonTheme') === -1){
                    scssString += key + ': ' + val + ';\n';
                }
            });

            var blob = new Blob([scssString], {type: 'text/plain;charset=utf-8'});
            saveAs(blob, 'theme.scss');
        }

        return {
            variables: variables,
            reset: reset,
            generateThemeFile: generateThemeFile
        };

    });