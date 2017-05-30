
todoapp.controller("MTDapp", function ($scope) {
    $scope.text="";
    $scope.todoarray = [];
    $scope.todoarray = JSON.parse(localStorage.getItem("mykey"));
    $scope.addtodoarray = function (text) {
        if (text!= "") {
            $scope.todoarray.push();
            localStorage.setItem("mykey", $scope.todoarray);
        }
        else{
            alert("alert");
        }
    }
});

