/**
 * Created by amitmudgal on 5/21/17.
 */
var app = angular.module("RnavApp", ["ngRoute"]);
	app.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/main.jsp",
	        controller: "homeController"
	    })
	    .when("/red", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/Finance.jsp",
	        controller: "ReportController"	
	    })
	    .when("/green", {
	        templateUrl : "mstrWeb?Project=MicroStrategy+Tutorial&Port=0&evt=2048001&src=mstrWeb.2048001&documentID=DF4FB20E4EBBE5505975EFB014636976&hiddensections=header,path,dockTop,dockLeft,footer"
	    })
	    .when("/blue", {
	        templateUrl : "mstrWeb?Project=MicroStrategy+Tutorial&Port=0&evt=2048001&src=mstrWeb.2048001&documentID=DF4FB20E4EBBE5505975EFB014636976&hiddensections=header,path,dockTop,dockLeft,footer"
	    });
	});
	
app.controller("homeController",function($scope){
    console.log("Controller Home is in here ");	
    $scope.docName ="Finance Document #1 ";	
 });

app.controller("ReportController",function($scope){
    console.log("Controller Home is in here ");	
    $scope.docName ="Resource Document #1 ";	
 });