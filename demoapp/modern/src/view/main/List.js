/**
 * This view is an example list of people.
 */
Ext.define('demoapp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'demoapp.store.Personnel'
    ],

    // title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'First Name',  dataIndex: 'First_Name', width: 100},
        { text: 'Last Name', dataIndex: 'Last_Name', width: 100}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
