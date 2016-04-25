var store = Ext.create('Ext.data.ArrayStore', {
    // store configs
    autoDestroy: true,
    storeId: 'Names',
    // reader configs
    idIndex: 0,
    fields: [
       'company',
       {name: 'firstname', type: 'string'},
       {name: 'lastname', type: 'string'}
    ]
});


// Copy to the view model

Ext.define('demoapp2.view.Names', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.names',
 
    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
 
    stores: {
        NameValueStore: {
            autoLoad: true,
            model: 'MyApp.model.Name',
            proxy: {
                type: 'ajax',
                url: '/data.json',
                reader: {
                    type: 'json',
                    rootProperty: 'rows'
                }
            }
        }
    }
 
});

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',
 
    requires: [
        'MyApp.view.MyViewportViewModel',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.view.Table'
    ],
 
    viewModel: {
        type: 'myviewport'
    },
 
    items: [
        {
            xtype: 'gridpanel',
            title: 'My Grid Panel',
            bind: {
                store: '{NameValueStore}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'value',
                    text: 'Value'
                }
            ]
        }
    ]
 
});