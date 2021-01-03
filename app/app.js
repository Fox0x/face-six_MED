"use strict";

//Functions
function MainCtrl($scope) {
    $scope.hello = "Hello, world";

}

function SelectionCtrl($scope) {
    $scope.isPlayerShow = false;
}

function ParticipantsCtrl($scope) {
    $scope.participants = [{
        id: "000000001",
        name: "Kirill",
        sName: "Golub",
        age: 23,
        phone: "055-474-20-12",
        group: "Doctor",
        lastVisit: "2013-03-01"
    },
        {
            id: "000000002",
            name: "Katya",
            sName: "Vorontsova",
            age: 22,
            phone: "123-123-123-124",
            group: "Patient",
            lastVisit: "2013-03-02"
        }];
}

//Main block
let app = angular.module('face-six-medApp', ["ngMaterial"])
    .controller("MainCtrl", MainCtrl);

//Controllers
app.controller("SelectionCtrl", SelectionCtrl);
app.controller("ParticipantsCtrl", ParticipantsCtrl);
