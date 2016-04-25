Ext.define('demoapp2.view.GroupsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.group-groups',

    stores: {
        allgroups: {
            source: 'Groups',
            sorters: {
                property: 'name',
                direction: 'ASC'
            }
        }
    },
    data: {
        title: 'Groups'
    },
    formulas: {
        currentRecord: {
            // We need to bind deep to be notified on each model change
            bind: {
                bindTo: '{groupGrid.selection}', //--> reference configurated on the grid view (reference: groupGrid)
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('records').getById(record);
                }
                this.set('currentRecord', record);
            }
        }
    }
});