var customers = new DevExpress.data.DataSource([{
    "ToDo": "Coding",
    "Date": "13:41:00 AM",
    "Done": false
}, {
    "ToDo": "Go home",
    "Date": "13:41:00 AM",
    "Done": false
}
]);

var data = new DevExpress.data.DataSource({

    store: {
        type: "local",
        name: "MyLocalData",
        key: "id"
    }
});