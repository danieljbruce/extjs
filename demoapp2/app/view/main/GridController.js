Ext.define('demoapp2.view.main.GridController', {
    
    extend: 'Ext.app.ViewController',
    alias: 'controller.maingrid',

    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },


});