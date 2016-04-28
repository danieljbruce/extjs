writeToDetails = function (index) {
    // Functionality:
    // This updates the form details based on the data in the People store.
    // Parameters:
    // index is the index of the item selected. ie. 0, 1, 2, 3 etc.
    // Use cases: 
    // Triggered when an item is selected in the grid.

    var store = Ext.getStore('People');
    var record = store.getAt(index);

    Ext.getCmp('firstnametext').setValue(record.data.firstname);
    Ext.getCmp('lastnametext').setValue(record.data.lastname);
    Ext.getCmp('notestext').setValue(record.data.notes);
};

writeToGrid = function (index) {
    // Functionality:
    // This updates the form details based on the data in the People store.
    // Parameters:
    // index is the index of the item selected. ie. 0, 1, 2, 3 etc.
    // Use cases: 
    // Triggered when an item is selected in the grid.

    var store = Ext.getStore('People');
    var record = store.getAt(index);

    record.set('firstname', Ext.getCmp('firstnametext').getValue());
    record.set('lastname', Ext.getCmp('lastnametext').getValue());
    record.set('notes', Ext.getCmp('notestext').getValue());
};

Ext.define('demoapp2.view.main.DetailsFormController', {
    extend: 'demoapp2.view.main.GridController',
    alias: 'controller.details',

    onCancelClicked: function (sender, record) {
        // Functionality:
        // Loads details from the grid array store to the form.
        // Parameters:
        //

        var grid = Ext.getCmp('gridlist');
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        var index = grid.store.indexOf(selectedRecord); // index is set equal to the index of the selected record in the grid ie. 0, 1, 2, 3 etc.
        
        this.writeToDetails(index); // Writes the details of the grid back to the form in the same way as when initial clicks were done.

        // Ext.Msg.confirm('Confirm', 'Cancel Clicked', 'onConfirm', this); // This asks for confirmation
    },

    onSaveClicked: function (sender, record) {
        // Functionality:
        // Saves details from the details form to the store reflected by the grid array.
        // Parameters:

        var grid = Ext.getCmp('gridlist');
        var selectedRecord = grid.getSelectionModel().getSelection()[0];
        var index = grid.store.indexOf(selectedRecord); // index is set equal to the index of the selected record in the grid ie. 0, 1, 2, 3 etc.

        writeToGrid(index);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});

