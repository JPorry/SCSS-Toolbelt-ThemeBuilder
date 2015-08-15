'use strict';
angular.module('baseProject')
    .directive('themeSwitcher', function(){
        return {
            restrict: 'A',
            link: function(scope, elem, attrs){

                var switcher = angular.element(document.createElement('i'));

                switcher.addClass('switcher fa fa-lightbulb-o');

                function onMouseEnter(){
                    elem.append(switcher);
                    switcher.on('click', function(){
                        elem.toggleClass('light');
                    });

                    elem.one('mouseleave', function(){
                        switcher.off('click');
                        elem.find('.switcher').remove();
                        elem.one('mouseenter', onMouseEnter);
                    });
                };

                elem.one('mouseenter', onMouseEnter);
            }
        };
    });