var testApp = angular.module('testApp', ['ngRoute']);
var configuration = {
  appPartialPath: "/partial/",
  appApiEntryPoint: "/api/"
 };

 testApp.config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'mstrWeb?Project=MicroStrategy+Tutorial&Port=0&evt=2048001&src=mstrWeb.2048001&documentID=262A4EF8446047CB2D1C53A9F1D04B34&hiddensections=header,path,dockTop,dockLeft,footer',
        controller: 'MainCtrl'
      });
 });

 /* CONTROLLER MAIN FORM */
 testApp.controller('MainCtrl', function ($scope) {
    console.log("APP STARTED");
 });