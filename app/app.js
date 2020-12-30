"use strict";

function MainCtrl($scope) {
$scope.hello = "Hello";
}

let app = angular.module('face-six-medApp', ["ngMaterial"])
    .controller("MainCtrl", MainCtrl);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.disableTheming();
  });