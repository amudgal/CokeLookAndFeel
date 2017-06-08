/**
 * Created by amitmudgal on 5/22/17.
 */
var app = angular.module("RnavApp", ["ngRoute"]);
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
 });

app.controller("FLandCntrl",function($scope){
    $scope.docName ="Finance Landing Page";	
 });

app.controller("fMetricWFCntrl",function($scope){
    $scope.docName ="Finance Metric Water Fall";	
 });

app.controller("fPBTWFCntrl",function($scope){
    $scope.docName ="Finance PBT Waterfall";	
 });

app.controller("fScorecardCntrl",function($scope){
    $scope.docName ="Finance Scorecard";	
 });

app.controller("fMetricDtlCntrl",function($scope){
    $scope.docName ="Finance Metric Detail";	
 });

app.controller("fPNLDtlCntrl",function($scope){
    $scope.docName ="Finance P&L Detail";	
 });

app.controller("fPNLCmpCntrl",function($scope){
    $scope.docName ="Finance P&L Comparative";	
 });

app.controller("fTrendCntrl",function($scope){
    $scope.docName ="Finance Trend";	
 });

app.controller("fQtrPlacementCntrl",function($scope){
    $scope.docName ="Finance Quarterly Placement";	
 });

app.controller("sTrxCntrl",function($scope){
    $scope.docName ="Strategy Transactions";	
 });

app.controller("sShrDtlCntrl",function($scope){
    $scope.docName ="Strategy Share Details";	
 });

app.controller("sShrBrndCntrl",function($scope){
    $scope.docName ="Strategy Share Brand";	
 });

app.controller("sIncidenceCntrl",function($scope){
    $scope.docName ="Strategy Incedence";
 });

app.controller("bBooksCntrl",function($scope){
    $scope.docName ="Brefing Books";
 });

