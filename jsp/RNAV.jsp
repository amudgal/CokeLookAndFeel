<!DOCTYPE html>
<html>
  <head>
    <script   src="https://code.jquery.com/jquery-3.2.1.min.js"   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="   crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-route.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
     <script src="https://rawgit.com/dwmkerr/angular-modal-service/master/dst/angular-modal-service.js"></script>
    <script type="text/javascript" src="../plugins/CokeLookAndFeel/Controllers/MainController.js"></script>
    <script type="text/javascript" src="../plugins/CokeLookAndFeel/Controllers/ModalController.js"></script>
<script type="text/javascript" src="../plugins/CokeLookAndFeel/vendors/typeahead/bloodhound.min.js"></script>
<script type="text/javascript" src="../plugins/CokeLookAndFeel/vendors/typeahead/typeahead.bundle.min.js"></script>
<script type="text/javascript" src="../plugins/CokeLookAndFeel/vendors/typeahead/typeahead.jquery.min.js"></script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" type="text/css" href="../plugins/CokeLookAndFeel/style/PopUpWidget.css">
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <!-- script type="text/javascript" src="../plugins/CokeLookAndFeel/js/Nav.js"></script-->
    <link rel="stylesheet" type="text/css" href="../plugins/CokeLookAndFeel/style/NavBartheme.css">
  </head>
	<body ng-app="RnavApp" ng-controller="MainController">
	<div id="container">
    <!-- Top Navigation Section --------------------------------------------------------------------------------- -->
    <div id="nav-container" class="header">
		<section class="navigation">
		  <div class="nav-container">
		    <div class="brand"><a href="#!"><img src="../plugins/CokeLookAndFeel/style/images/coke_logo.png"></img></a></div>
		    <nav>
		      <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
		      <ul class="nav-list">
		        <li><a href="#/"><img src="../plugins/CokeLookAndFeel/style/images/coke_home.png"></img></a></li>
		        <li><a>Finance</a>
		          <ul class="nav-dropdown">
		            <li><a href="#fland">Finance Landing Page</a></li>
		            <li><a href="#fMetricWF">Metric Water Fall</a></li>
		            <li><a href="#fPBTWF">PBT Waterfall</a></li>
		            <li><a href="#fScorecard">ScoreCard</a></li>
		            <li><a href="#fMetricDtl">Metric Detail</a></li>
		            <li><a href="#fPNLDtl">P&amp;L Detail</a></li>
		            <li><a href="#fPNLCmp">P&amp;L Comparative</a></li>
		            <li><a href="#fTrend">Trend</a></li>
		            <li><a href="#fQtrPlacement">Quarterly Placement</a></li>
		          </ul>
		        </li>
		        <li><a>Strategy</a>
		          <ul class="nav-dropdown">
		            <li><a href="#sTrx">Transactions</a></li>
		            <li><a href="#sShrDtl">Share Details</a></li>
		            <li><a href="#sShrBrnd">Share Brand</a></li>
		            <li><a href="#sIncdnce">Incidence</a></li>
		          </ul>
		        </li>
		        <li><a href="#bBooks">Briefing books</a></li>
		        <li><a href="#!"><img src="../plugins/CokeLookAndFeel/style/images/coke_pdf.png"></a></li>
		      </ul>
		      
		    </nav>
		  </div>
		</section>
       </div>
     <!-- Top Navigation Section Ends----------------------------------------------------------------------------- -->
      <div class="DashboardBar">
      <!--  a class="btn btn-default" href ng-click="show()">Launch Widget</a-->
      <a href="../plugins/CokeLookAndFeel/html/popupWidget.html" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#myModal" >Launch Widget</a>
      <div id="myModal" class="modal fade" >
        <div class="modal-dialog" style="width:80%">
            <div class="modal-content" >
                <!-- Content will be loaded here from "popupWidget.html" file -->
            </div>
        </div>
    </div>
      </div>
     <!-- Widget button section ends  ---------------------------------------------------------------------------- -->
        <div id="content" class="content">
			<object width=100% height=1000px>
		              <div ng-view></div>
		    </object>
	    </div>
	</div>
	


	</body>
</html>