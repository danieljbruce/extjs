Ext.define('demoapp2.view.main.Details', {
    extend: 'Ext.form.Panel',
    xtype: 'details',
    alias: 'viewdetails',
    //title: 'User Form',
    height: '100%',
    width: '100%',
    bodyPadding: 20,
    defaultType: 'textfield',
    controller: 'details',

    requires: [
        'demoapp2.view.main.DetailsFormController'
    ],

    items: [
        {
            id: 'firstnametext', // This is where users can change the first name.
            xtype: 'textfield',
            fieldLabel: 'First Name',
            width: '100%'            
        },
        {
            id: 'lastnametext', // This is where users can change the last name.
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            width: '100%' 
        },
        {
            id: 'notestext', // This is where users can change the first name.
            xtype: 'textareafield',
            //fieldLabel: 'Date of Birth',
            width: '100%',
            height: 200,
            name: 'notesinput'
        },
        {
            id: 'savebutton', // This is where users can change the first name.
            name: 'savebutton',
            alias: 'savebutton',
            xtype: 'button',
            text: 'Save',
            iconCls: 'save',
            handler: 'onSaveClicked'
        },
        {
            id: 'cancelbutton', // This is where users can change the first name.
            name: 'cancelbutton',
            alias: 'cancelbutton',
            handler: 'onCancelClicked',
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'cancel'
        }
    ], 

    listeners: {
        select: 'onItemSelected'
    }
    
});

/*
Ext.define('demoapp2.controller.SaveButtonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.savebutton',
    onSaveClick: function (argS) {
        alert("Softmore");
        // called by 'change' event
    }
});
*/
        /*
        {
            xtype: 'textareafield',
            //fieldLabel: 'Date of Birth',
            name: 'notesinput'
        } */

/*
    requires: [
        'demoapp2.store.People'
    ],

    title: 'Personnel',

    store: {
        type: 'people'
    },

    columns: [
        { text: 'First Name',  dataIndex: 'firstname' },
        { text: 'Last Name', dataIndex: 'lastname'}, //, flex: 1 },
        { text: 'Phone', dataIndex: 'lastname'} //, flex: 1 }
    ],
*/

/*,
    buttons: [
        {
            text: 'Ok',
            handler: function() {
                var form = this.up('form'); // get the form panel
                if (form.isValid()) { // make sure the form contains valid data before submitting
                    form.submit({
                        success: function(form, action) {
                           Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result.msg);
                        }
                    });
                } else { // display error alert if the data is invalid
                    Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
                }
            }
        },
        {
            text: 'Cancel',
            handler: function() {
                var form = this.up('form'); // get the form panel
                if (form.isValid()) { // make sure the form contains valid data before submitting
                    form.submit({
                        success: function(form, action) {
                           Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result.msg);
                        }
                    });
                } else { // display error alert if the data is invalid
                    Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
                }
            }
        }        
    ],

    defaults: {
        listeners: {
            change: function(field, newVal, oldVal) {
                console.log('change');
            }
        },
    } */
