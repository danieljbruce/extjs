/**
 * This view is an example list of people.
 */
Ext.define('demoapp2.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'demoapp2.store.People'
    ],

    // title: 'Personnel',

    store: {
        type: 'people'
    },

    columns: [
        { text: 'First Name',  dataIndex: 'firstname' },
        { text: 'Last Name', dataIndex: 'lastname'} //, flex: 1 },
        //{ text: 'Phone', dataIndex: 'phone'} //, flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

/*
Ext.define('demoapp2.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'demoapp2.store.Personnel'
    ],

     title: 'Personnel', 

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email'}, //, flex: 1 },
        { text: 'Phone', dataIndex: 'phone'} //, flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
*/