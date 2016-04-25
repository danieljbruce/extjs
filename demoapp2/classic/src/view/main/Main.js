/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

/*

Ext.define('demoapp2.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'demoapp2.view.main.MainController',
        'demoapp2.view.main.MainModel',
        'demoapp2.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,



    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'right'
        }
    },

    defaults: {
        bodyPadding: 0, // was 20
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});

*/

// Do an Ext define

Ext.define('demoapp2.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'demoapp2.view.main.MainController',
        'demoapp2.view.main.MainModel',
        'demoapp2.view.main.List', //,
        'demoapp2.view.main.Details'
    ],

    layout: {
        type: 'hbox',       // Arrange child items vertically
        align: 'stretch',    // Each takes up full width
        padding: 0
    },

    renderTo: Ext.getBody(),
    width: '100%',
    height: '100%',
    ui: 'inputnames',
    //title: 'Container Panel',
    items: [
        {
            xtype: 'mainlist', // Left Panel
            // title: 'Child Panel 1',
            height: '100%',
            width: 200
        },
        {
            xtype: 'details', // Right Panel
            //title: 'Child Panel 2',
            height: '100%',
            width: '100%'
        }
    ]
});

/*
Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 300,
    ui: 'inputnames',
    title: 'Container Panel',
    items: [
        {
            xtype: 'panel',
            title: 'Child Panel 1',
            height: 100%,
            width: '75%'
        },
        {
            xtype: 'mainlist',
            title: 'Child Panel 2',
            height: 100%,
            width: '25%'
        }
    ]
});
*/