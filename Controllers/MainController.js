/**
 * Created by amitmudgal on 5/21/17.
 */
var myApp = angular.module('rnavApp', []);

angular.module('rnavApp',['ngRoute'])
     .config(function($routeProvider){
        $routeProvider
            .when("/",{
            	templateUrl: "mstrWeb?Project=MicroStrategy+Tutorial&Port=0&evt=2048001&src=mstrWeb.2048001&documentID=262A4EF8446047CB2D1C53A9F1D04B34&hiddensections=header,path,dockTop,dockLeft,footer"
            })
            .when("/finance",{
                templateUrl: "mstrWeb?Project=MicroStrategy+Tutorial&Port=0&evt=2048001&src=mstrWeb.2048001&documentID=262A4EF8446047CB2D1C53A9F1D04B34&hiddensections=header,path,dockTop,dockLeft,footer"
                //controller: "homeController"
            })
            .when("/briefingbooks",{
                templateUrl: "mstrWeb?Project=MicroStrategy+Tutorial&Port=0&evt=2048001&src=mstrWeb.2048001&documentID=DF4FB20E4EBBE5505975EFB014636976&hiddensections=header,path,dockTop,dockLeft,footer"
                ///controller: "GraphsController"
            })
  
    })