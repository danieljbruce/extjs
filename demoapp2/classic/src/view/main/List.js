/**
 * This view is an example list of people.
 */
writeToGrid = function (index) {
    // Functionality:
    // This updates the form details based on the data in the People store.
    // Parameters:
    // index is the index of the item selected. ie. 0, 1, 2, 3 etc.
    // Use cases: 
    // Triggered when an item is selected in the grid.

    var store = Ext.getStore('People');
    var record = store.getAt(index);
    
    console.log(record);

    record.set('firstname', Ext.getCmp('firstnametext').getValue());
    record.set('lastname', Ext.getCmp('lastnametext').getValue());
    record.set('notes', Ext.getCmp('notestext').getValue());
}

Ext.define('demoapp2.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'demoapp2.store.People',
        'demoapp2.view.main.GridController'
    ],

    // title: 'Personnel',

    controller: 'maingrid',
    id: 'gridlist',

    store: {
        type: 'people'
    },

    columns: [
        { text: 'First Name',  dataIndex: 'firstname' },
        { text: 'Last Name', dataIndex: 'lastname'} //, flex: 1 },
    ],
    listeners: {
        select: function(dv, record, item, index, e) {
            //Populates the details form with the appropriate data.
            //details.firstnameinput.setValue("Raisins");            
            writeToDetails(item); 
            return;
        }
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