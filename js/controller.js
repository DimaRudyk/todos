DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.dataGridOptions = {
        dataSource: data,
        scrolling: {
            mode: "virtual"
        },
        columns: [
            {
                dataField: "ToDo",
                sortOrder: "asc",
                validationRules: [{ type: "required" }]
            },
            {
                dataField: "Date",
                dataType: 'date',
                editorOptions: {
                    type: 'time'
                },
                format: "shortTime",
                validationRules: [{ type: "required" }]
            },
            {
                dataField: "Done",
                dataType: "boolean",
                editorOptions:{
                    disable: false,
                    //readOnly: false
                }
            }
            
        ],         
        editing: {
            mode: 'row',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            texts: {
                deleteRow: 'Remove',
                saveRowChanges: 'OK',
                confirmDeleteTitle: 'Confirm Row Deletion'
            }
        }

    };
});

