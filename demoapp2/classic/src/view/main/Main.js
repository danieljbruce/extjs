/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

// Do an Ext define

Ext.define('demoapp2.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'demoapp2.view.main.MainModel',
        'demoapp2.view.main.List', //,
        'demoapp2.view.main.Details'
    ],
    
    stores: [
        'People'
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