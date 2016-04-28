Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['id','name'],
    proxy: {
        type: 'ajax',
        api: {
            read: 'read.json',
            update: 'update.json'
        }
    }
});

Ext.define('MyViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myvc',
    onUserLoad: function(btn, e, eOpts) {
        this.getViewModel().linkTo('user', {
            type: 'User',
            id: 0
        })
    },
    onUserSave: function(btn, e, eOpts) {
        this.getViewModel().get('user').save({
            callback: function(record) {
                console.log( record )
            }
        })
    }
});

Ext.define('MyViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.myvm'    
});

Ext.define('MyForm', {
    extend: 'Ext.form.Panel',
    bodyPadding: 10,
    title: 'My Form',
    controller: 'myvc',
    viewModel: {
        type: 'myvm'
    },
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Name',
        bind: '{user.name}'
    }],
    tbar: [{
        text: 'Load a User',
        handler: 'onUserLoad'
    }],
    bbar: [{
        text: 'Save',
        handler: 'onUserSave'
    }]
});

Ext.application({
    name: 'Fiddle',
    launch: function() {
        Ext.create('MyForm', {
            renderTo: document.body,
            width: 400
        })
    }
});