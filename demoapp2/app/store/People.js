Ext.define('demoapp2.store.People', {
    extend: 'Ext.data.ArrayStore',

    alias: 'store.people',
    model: 'Person',
    storeId: 'People',

    data: { items: [
        { firstname: 'Joe', lastname: "Developer", notes: ""},
        { firstname: 'John', lastname: "Doe", notes: ""},
        { firstname: 'Jane', lastname: "Doe", notes: ""},
        { firstname: 'Henry', lastname: "Smith", notes: ""},
        { firstname: 'William', lastname: "Shatner", notes: ""},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''},
        { firstname: '', lastname: '', notes: ''}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
