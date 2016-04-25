Ext.define('demoapp.store.People', {

	extend: 'Ext.data.Store',
    
	alias: 'store.people',

    fields: [
        'firstname', 'lastname'
    ],

    data: { items: [
        { firstname: 'Joe', lastname: "Developer"},
        { firstname: 'John', lastname: "Doe"},
        { firstname: 'Jane', lastname: "Doe"},
        { firstname: 'Henry', lastname: "Smith"},
        { firstname: 'William', lastname: "Shatner"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
