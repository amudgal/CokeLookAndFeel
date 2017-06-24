/**
 * Created by amitmudgal on 5/22/17.
 */
var app = angular.module("RnavApp", ["ngRoute","angularModalService"]);
	app.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/MainLandingPage.jsp",
	        controller: "HomeCntrl"
	    })
	    .when("/fland", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FLanding.jsp",
	        controller: "FLandCntrl"
	    })
	    .when("/fMetricWF", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FMetricWF.jsp",
	        controller: "fMetricWFCntrl"	
	    })
	    .when("/fPBTWF", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FPBTWF.jsp",
	        controller: "fPBTWFCntrl"	
	    })
	    .when("/fScorecard", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FScorecard.jsp",
	        controller: "fScorecardCntrl"	
	    })
	    .when("/fMetricDtl", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FMetricDtl.jsp",
	        controller: "fMetricDtlCntrl"	
	    })
	    .when("/fPNLDtl", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FPNLDtl.jsp",
	        controller: "fPNLDtlCntrl"	
	    })
	    .when("/fPNLCmp", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FPNLCmp.jsp",
	        controller: "fPNLCmpCntrl"	
	    })
	    .when("/fTrend", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FTrend.jsp",
	        controller: "fTrendCntrl"	
	    })
	    .when("/fQtrPlacement", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/FQtrPlacement.jsp",
	        controller: "fQtrPlacementCntrl"	
	    })
	    .when("/sTrx", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/STrx.jsp",
	        controller: "sTrxCntrl"	
	    })
	    .when("/sShrDtl", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/SShareDtl.jsp",
	        controller: "sShrDtlCntrl"	
	    })
	    .when("/sShrBrnd", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/SShrBrnd.jsp",
	        controller: "sShrBrndCntrl"	
	    })
	    .when("/sIncdnce", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/SIncedence.jsp",
	        controller: "sIncidenceCntrl"	
	    })
	    .when("/bBooks", {
	        templateUrl : "../plugins/CokeLookAndFeel/jsp/partials/BBooks.jsp",
	        controller: "bBooksCntrl"	
	    });
	    
	    
	});
	
app.controller("HomeCntrl",function($scope){
    $scope.docName ="Landing Page";
    updatePath($scope);
 });

app.controller("FLandCntrl",function($scope){
    $scope.docName ="Finance Landing Page";	
    updatePath($scope);
 });

app.controller("fMetricWFCntrl",function($scope){
    $scope.docName ="Finance Metric Water Fall";
    updatePath($scope);
 });

app.controller("fPBTWFCntrl",function($scope){
    $scope.docName ="Finance PBT Waterfall";
    updatePath($scope);
 });

app.controller("fScorecardCntrl",function($scope){
    $scope.docName ="Finance Scorecard";
    updatePath($scope);
 });

app.controller("fMetricDtlCntrl",function($scope){
    $scope.docName ="Finance Metric Detail";
    updatePath($scope);
 });

app.controller("fPNLDtlCntrl",function($scope){
    $scope.docName ="Finance P&L Detail";
    updatePath($scope);
 });

app.controller("fPNLCmpCntrl",function($scope){
    $scope.docName ="Finance P&L Comparative";
    updatePath($scope);
 });

app.controller("fTrendCntrl",function($scope){
    $scope.docName ="Finance Trend";
    updatePath($scope);
 });

app.controller("fQtrPlacementCntrl",function($scope){
    $scope.docName ="Finance Quarterly Placement";
    updatePath($scope);
 });

app.controller("sTrxCntrl",function($scope){
    $scope.docName ="Strategy Transactions";
    updatePath($scope);
 });

app.controller("sShrDtlCntrl",function($scope){
    $scope.docName ="Strategy Share Details";
    updatePath($scope);
 });

app.controller("sShrBrndCntrl",function($scope){
    $scope.docName ="Strategy Share Brand";
    updatePath($scope);
 });

app.controller("sIncidenceCntrl",function($scope){
    $scope.docName ="Strategy Incedence";
    updatePath($scope);
 });

app.controller("bBooksCntrl",function($scope){
    $scope.docName ="Brefing Books";
    updatePath($scope);
 });
app.controller("MainController",function($scope, ModalService){

    $scope.show = function() {
	
        ModalService.showModal({
            templateUrl: '../plugins/CokeLookAndFeel/html/PopUp.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };
})


function getNameOfPath(element,srcJSON){
	
	return "nonne";
}

function getCookieValue(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
   // console.log(ca);
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
     //   	console.log(c);
      //  	console.log(c.substring(name.length, c.length).replace('/"/g','').replace(/'/g,'"'));
        	var retStr = c.substring(name.length, c.length).replace('/"/g','').replace(/'/g,'"');
            return retStr.substring(0,retStr.length);
        }
    }
    return "";
}

function updatePath($scope){
	console.log("inside the update Path");
	try{
		$scope.srcJSON = jQuery.parseJSON( getCookieValJSON('Options').replace('/"/g','').replace(/'/g,'"'));
	}catch(err){
		console.log('Error' + err);
	}
	var element=getCookieValue('topLvl');
	console.log(element);
	var level="";
	if(element==''){
	    $scope.pathsNew=" CCNA";
	}else{
		level=element.replace(/\./g, '').substr(-3);
		$scope.pathsNew=getNameOfPath(level,$scope.srcJSON);
	}
	console.log(level + ":::::" +$scope.pathsNew + ":::::" + element.length + "::::" + element);
	
}

function getCookieValJSON(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
      //  	console.log(c);
      //  	console.log(c.substring(name.length, c.length).replace('/"/g','').replace(/'/g,'"'));
        	var retStr = c.substring(name.length, c.length).replace('/"/g','').replace(/'/g,'"');
            return retStr.substring(1,retStr.length-1);
        }
    }
    return "";
}
