'use strict';
angular.module('baseProject', ['ui.router', 'angularSpectrumColorpicker'])
    .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '':{
                        controllerAs: 'home',
                        template:'<div class=content ng-class=\"{open: home.sidebar.isOpen}\"><header><div class=toolbar theme-switcher><h1 class=title>Example</h1><button class=toggleMenu><i class=\"fa fa-bars\"></i></button><div class=\"menu right\"><ul class=menu-section><li class=active>Option 1</li><li>Option 2</li><li>Option 3</li></ul><ul class=menu-section><li>Option 4</li></ul></div></div></header><div class=sideMenu><div class=side-menu theme-switcher><h3 class=side-menu-title>Menu 1</h3><ul><li class=selected><a href=#>Option 1</a></li><li><a href=#>Option 2</a></li><li><a href=#>Option 3</a></li></ul><h3 class=side-menu-title>Menu 2</h3><ul><li><a href=#>Option 1</a></li><li><a href=#>Option 2</a></li></ul></div></div><div class=main><h2>Tables</h2><table class=zebra theme-switcher><thead><tr><th class=\"sortable sorted\">Column 1</th><th>Column 2</th><th>Column 3</th><th>Column 4</th></tr></thead><tbody><tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td></tr><tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td></tr><tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td></tr></tbody></table><h2>Buttons</h2><button class=block>Primary</button> <button class=\"block secondary\">Secondary</button> <button class=\"block warning big\">Warning Big</button> <button class=\"block info small\">Info Small</button> <button class=\"block danger small\">Danger Small</button> <button class=\"block danger small\" disabled>Danger Small (Disabled)</button><h2>Alerts</h2><div class=alert>This is an alert message (Regular)</div><div class=\"alert secondary\">This is an alert message (Secondary)</div><div class=\"alert info\">This is an alert message (Info)</div><div class=\"alert warning\">This is an alert message (Warning)</div><div class=\"alert danger\">This is an alert message (Danger)</div></div></div><div class=popup-wrapper></div>',
                        controller: 'homeCtrl'
                    },
                    sidebar: {
                        controllerAs: 'sidebar',
                        controller: 'sidebarCtrl',
                        template:'<aside ng-class=\"{open: sidebar.sidebar.isOpen}\"><div class=sidebarHeader><i class=\"fa fa-times\" ng-click=sidebar.toggle()></i></div><collapsable title=\"Non Theme variables\"><form><variable-changer variable=$nonTheme-background-color label=\"Background Color\"></variable-changer></form></collapsable><collapsable title=\"General Variables\" open=true><form><variable-changer variable=$darkColor label=\"Dark Color\"></variable-changer><variable-changer variable=$lightColor label=\"Light Color\"></variable-changer><variable-changer variable=$contrastColor label=\"Contrast Color\"></variable-changer><variable-changer variable=$midtone label=Midtone></variable-changer><variable-changer variable=$darkTextColor label=\"Dark Text Color\"></variable-changer><variable-changer variable=$lightTextColor label=\"Light Text Color\"></variable-changer><variable-changer variable=$primaryColor label=\"Primary Color\"></variable-changer><variable-changer variable=$secondaryColor label=\"Secondary Color\"></variable-changer><variable-changer variable=$dangerColor label=\"Danger Color\"></variable-changer><variable-changer variable=$infoColor label=\"Info Color\"></variable-changer><variable-changer variable=$warningColor label=\"Warning Color\"></variable-changer><variable-changer variable=$disabledColor label=\"Disabled Color\"></variable-changer></form></collapsable><collapsable title=\"Toolbar Variables\"><form><variable-changer variable=$toolbar-background-color specific=true label=\"Background Color\"></variable-changer><variable-changer variable=$toolbar-text-color specific=true label=\"Text Color\"></variable-changer><variable-changer variable=$toolbar-highlight-color specific=true label=\"Highlight Color\"></variable-changer></form></collapsable><collapsable title=\"Side Menu Variables\"><form><variable-changer variable=$side-menu-background-color specific=true label=\"Background Color\"></variable-changer><variable-changer variable=$side-menu-text-color specific=true label=\"Text Color\"></variable-changer><variable-changer variable=$side-menu-highlighted-color specific=true label=\"Highlight Color\"></variable-changer><variable-changer variable=$side-menu-title-color specific=true label=\"Menu Title Color\"></variable-changer></form></collapsable><collapsable title=\"Tables Variables\"><form><variable-changer variable=$table-header-background-color specific=true label=\"Background Color\"></variable-changer><variable-changer variable=$table-header-text-color specific=true label=\"Text Color\"></variable-changer><variable-changer variable=$table-contrast-color specific=true label=\"Contrast Color\"></variable-changer><variable-changer variable=$table-row-color specific=true label=\"Row Color\"></variable-changer><variable-changer variable=$table-even-row-color specific=true label=\"Even Row Color\"></variable-changer><variable-changer variable=$table-hover-row-color specific=true label=\"Hover Row Color\"></variable-changer><variable-changer variable=$table-border-color specific=true label=\"Border Color\"></variable-changer></form></collapsable><collapsable title=\"Buttons Variables\"><form><variable-changer variable=$buttons-primary-color specific=true label=\"Primary Color\"></variable-changer><variable-changer variable=$buttons-secondary-color specific=true label=\"Secondary Color\"></variable-changer><variable-changer variable=$buttons-danger-color specific=true label=\"Danger Color\"></variable-changer><variable-changer variable=$buttons-info-color specific=true label=\"Info Color\"></variable-changer><variable-changer variable=$buttons-warning-color specific=true label=\"Warning Color\"></variable-changer><variable-changer variable=$buttons-disabled-color specific=true label=\"Disabled Color\"></variable-changer><variable-changer variable=$buttons-text-color specific=true label=\"Primary Text Color\"></variable-changer><variable-changer variable=$buttons-secondary-text-color specific=true label=\"Secondary Text Color\"></variable-changer><variable-changer variable=$buttons-danger-text-color specific=true label=\"Danger Text Color\"></variable-changer><variable-changer variable=$buttons-info-text-color specific=true label=\"Info Text Color\"></variable-changer><variable-changer variable=$buttons-warning-text-color specific=true label=\"Warning Text Color\"></variable-changer><variable-changer variable=$buttons-disabled-text-color specific=true label=\"Disabled Text Color\"></variable-changer><variable-changer variable=$buttons-active-overlay-color specific=true label=\"Active Overlay Color\"></variable-changer><variable-changer variable=$buttons-overlay-color specific=true label=\"Overlay Color\"></variable-changer></form></collapsable><collapsable title=\"Alerts Variables\"><form><variable-changer variable=$alert-primary-background-color specific=true label=\"Primary Color\"></variable-changer><variable-changer variable=$alert-secondary-background-color specific=true label=\"Secondary Color\"></variable-changer><variable-changer variable=$alert-warning-background-color specific=true label=\"Warning Color\"></variable-changer><variable-changer variable=$alert-info-background-color specific=true label=\"Info Color\"></variable-changer><variable-changer variable=$alert-danger-background-color specific=true label=\"Danger Color\"></variable-changer><variable-changer variable=$alert-text-color specific=true label=\"Text Color\"></variable-changer><variable-changer variable=$alert-secondary-text-color specific=true label=\"Secondary Text Color\"></variable-changer><variable-changer variable=$alert-warning-text-color specific=true label=\"Warning Text Color\"></variable-changer><variable-changer variable=$alert-info-text-color specific=true label=\"Info Text Color\"></variable-changer><variable-changer variable=$alert-danger-text-color specific=true label=\"Danger Text Color\"></variable-changer><variable-changer variable=$alert-border-color specific=true label=\"Border Color\"></variable-changer><variable-changer variable=$alert-secondary-border-color specific=true label=\"Secondary Border Color\"></variable-changer><variable-changer variable=$alert-warning-border-color specific=true label=\"Warning Border Color\"></variable-changer><variable-changer variable=$alert-info-border-color specific=true label=\"Info Border Color\"></variable-changer><variable-changer variable=$alert-danger-border-color specific=true label=\"Danger Border Color\"></variable-changer></form></collapsable><div class=footerButtons><button class=warning ng-click=sidebar.reset()><i class=\"fa fa-refresh\"></i> Reset</button> <button ng-click=sidebar.generateThemeFile()><i class=\"fa fa-file-code-o\"></i> Generate Theme</button></div><div class=restoreSidebar ng-click=sidebar.toggle()><i class=\"fa fa-cogs\"></i></div></aside>'
                    },
                    styles: {
                        controllerAs: 'styles',
                        controller: 'styleSectionCtrl',
                        template:'<style>\n\n\n    /* Toolbar styles */\n\n    .toolbar {\n        background-color: {{styles.variables[\'$toolbar-background-color\'] || styles.variables.$darkColor}};\n        color: {{styles.variables[\'$toolbar-text-color\'] || styles.variables.$lightColor}};\n    }\n\n    .toolbar .menu{\n        background-color: {{styles.variables[\'$toolbar-background-color\'] || styles.variables.$darkColor}};\n    }\n\n    .toolbar .menu ul li:hover, .toolbar .menu ul li.active{\n        color: {{styles.variables[\'$toolbar-highlight-color\'] || styles.variables.$contrastColor}};\n    }\n\n    .toolbar.light{\n        background-color: {{styles.variables[\'$toolbar-text-color\'] || styles.variables.$lightColor}};\n        color: {{styles.variables[\'$toolbar-background-color\'] || styles.variables.$darkColor}};\n    }\n\n    .toolbar.light .menu{\n        background-color: {{styles.variables[\'$toolbar-text-color\'] || styles.variables.$lightColor}};\n    }\n\n\n\n    /* Side Menu styles */\n\n    .side-menu{\n        background-color: {{styles.variables[\'$side-menu-background-color\'] || styles.variables.$darkColor}};\n    }\n\n    .side-menu .side-menu-title{\n        color: {{styles.variables[\'$side-menu-title-color\'] || styles.variables.$contrastColor}}\n    }\n\n    .side-menu li a{\n        color: {{styles.variables[\'$side-menu-text-color\'] || styles.variables.$lightColor}};\n    }\n\n    .side-menu li:HOVER, .side-menu li.selected{\n        background-color: {{styles.variables[\'$side-menu-highlighted-color\'] || styles.variables.$contrastColor}};\n    }\n\n    .side-menu.light {\n        background-color: {{styles.variables[\'$side-menu-text-color\'] || styles.variables.$lightColor}};\n        color: {{styles.variables[\'$side-menu-background-color\'] || styles.variables.$darkColor}};\n    }\n\n    .side-menu.light .side-menu-title{\n        color: {{styles.variables[\'$side-menu-title-color\'] || styles.variables.$contrastColor}};\n    }\n\n    .side-menu.light li a {\n        color: {{styles.variables[\'$side-menu-background-color\'] || styles.variables.$darkColor}};\n    }\n\n\n\n    /* Table styles */\n\n    table thead{\n        color: {{styles.variables[\'$table-header-text-color\'] || styles.variables.$lightColor}};\n    }\n\n    table thead tr{\n        background-color: {{styles.variables[\'$table-header-background-color\'] || styles.variables.$darkColor}};\n        border-bottom: 2px solid {{styles.variables[\'$table-border-color\'] || styles.variables.$midtone}};\n    }\n\n    table tbody tr{\n        border-bottom: 1px solid {{styles.variables[\'$table-border-color\'] || styles.variables.$midtone}};\n        border-top: 1px solid {{styles.variables[\'$table-border-color\'] || styles.variables.$midtone}};\n        background-color: {{styles.variables[\'$table-row-color\'] || \'transparent\'}};\n    }\n\n    table tbody tr:hover{\n        background-color: {{styles.variables[\'$table-hover-row-color\'] || \'#f0f0f0\'}} !important;\n    }\n\n    table.zebra tbody tr:nth-child(even){\n        background-color: {{styles.variables[\'$table-even-row-color\'] || \'#f6f6f6\'}};\n    }\n\n    table thead th.sortable.sorted{\n        border-bottom: 3px solid {{styles.variables[\'$table-contrast-color\'] || styles.variables.$contrastColor}};\n    }\n\n    table thead th.sortable:hover:after{\n        border-top: 7px solid {{styles.variables[\'$table-contrast-color\'] || styles.variables.$contrastColor}};\n    }\n\n\n    table.light thead{\n        color: {{styles.variables[\'$table-header-background-color\'] || styles.variables.$darkColor}};\n    }\n\n    table.light thead tr{\n        background-color: {{styles.variables[\'$table-header-text-color\'] || styles.variables.$lightColor}};\n    }\n\n\n\n\n    /* Button styles */\n\n\n    button{\n        color: {{styles.variables[\'$buttons-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$buttons-primary-color\'] || styles.variables.$primaryColor}};\n    }\n\n    button:after{\n        background-color: {{styles.variables[\'$buttons-overlay-color\'] || \'#fff\'}};\n    }\n\n    button:active:after{\n        background-color: {{styles.variables[\'$buttons-active-overlay-color\'] || \'#000\'}};\n    }\n\n    button.secondary{\n        color: {{styles.variables[\'$buttons-secondary-text-color\'] || styles.variables[\'$buttons-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$buttons-secondary-color\'] || styles.variables.$secondaryColor}};\n    }\n\n    button.danger{\n        color: {{styles.variables[\'$buttons-danger-text-color\'] || styles.variables[\'$buttons-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$buttons-danger-color\'] || styles.variables.$dangerColor}};\n    }\n\n    button.info{\n        color: {{styles.variables[\'$buttons-info-text-color\'] || styles.variables[\'$buttons-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$buttons-info-color\'] || styles.variables.$infoColor}};\n    }\n\n    button.warning{\n        color: {{styles.variables[\'$buttons-warning-text-color\'] || styles.variables[\'$buttons-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$buttons-warning-color\'] || styles.variables.$warningColor}};\n    }\n\n    button:disabled{\n        color: {{styles.variables[\'$buttons-disabled-text-color\'] || styles.variables[\'$buttons-text-color\'] || styles.variables.$lightTextColor}} !important;\n        background-color: {{styles.variables[\'$buttons-disabled-color\'] || styles.variables.$disabledColor}} !important;\n    }\n\n\n\n    /* Alert styles */\n\n    .alert{\n        color: {{styles.variables[\'$alert-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$alert-primary-background-color\'] || styles.variables.$primaryColor}};\n        border-color: {{styles.variables[\'$alert-border-color\'] || \'rgba(0,0,0,.1)\'}};\n    }\n\n    .alert.secondary{\n        color: {{styles.variables[\'$alert-secondary-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$alert-secondary-background-color\'] || styles.variables.$secondaryColor}};\n        border-color: {{styles.variables[\'$alert-secondary-border-color\'] || styles.variables[\'$alert-border-color\'] || \'rgba(0,0,0,.1)\'}};\n    }\n\n    .alert.danger{\n        color: {{styles.variables[\'$alert-danger-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$alert-danger-background-color\'] || styles.variables.$dangerColor}};\n        border-color: {{styles.variables[\'$alert-danger-border-color\'] || styles.variables[\'$alert-border-color\'] || \'rgba(0,0,0,.1)\'}};\n    }\n\n    .alert.info{\n        color: {{styles.variables[\'$alert-info-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$alert-info-background-color\'] || styles.variables.$infoColor}};\n        border-color: {{styles.variables[\'$alert-info-border-color\'] || styles.variables[\'$alert-border-color\'] || \'rgba(0,0,0,.1)\'}};\n    }\n\n    .alert.warning{\n        color: {{styles.variables[\'$alert-warning-text-color\'] || styles.variables.$lightTextColor}};\n        background-color: {{styles.variables[\'$alert-warning-background-color\'] || styles.variables.$warningColor}};\n        border-color: {{styles.variables[\'$alert-warning-border-color\'] || styles.variables[\'$alert-border-color\'] || \'rgba(0,0,0,.1)\'}};\n    }\n\n\n\n\n\n    body .wrapper .content{\n        background-color: {{styles.variables[\'$nonTheme-background-color\']}};\n    }\n\n</style>'
                    }
                }
            });
    }]);