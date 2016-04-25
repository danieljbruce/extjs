/**
 * This view is an example list of people.
 */

 
Ext.define('demoapp2.view.main.Details', {
    extend: 'Ext.form.Panel',
    xtype: 'details',

    //title: 'User Form',
    height: '100%',
    width: '100%',
    bodyPadding: 20,
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'First Name',
            width: '100%',
            name: 'firstnameinput' // This is where users can change the first name.
        },
        {
            fieldLabel: 'Last Name',
            width: '100%',
            name: 'lastnameinput' // This is where users can change the last name.
        },
        {
            xtype: 'textareafield',
            //fieldLabel: 'Date of Birth',
            width: '100%',
            name: 'notesinput'
        },
        {
            xtype: 'button',
            text: 'Save',
            itemId: 'save',
            iconCls: 'save'
        },
        {
            xtype: 'button',
            text: 'Cancel',
            itemId: 'cancel',
            iconCls: 'cancel'
        }

        
        /*
        {
            xtype: 'textareafield',
            //fieldLabel: 'Date of Birth',
            name: 'notesinput'
        } */
    ],
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
    ]
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
    /*
    listeners: {
        select: 'onItemSelected'
    }
    */
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