/**
 * This view is an example list of people.
 * Classic view
 */
 
Ext.define('demoapp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'demoapp.store.People'
    ],

    // title: 'Personnel',

    store: {
        type: 'store.people'
    },

    columns: [
        { text: 'First Name', dataIndex: 'firstname', width: 100},
        { text: 'Last Name', dataIndex: 'lastname', width: 100}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
