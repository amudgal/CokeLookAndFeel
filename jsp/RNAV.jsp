<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
    <script type="text/javascript" src="../plugins/CokeLookAndFeel/Controllers/MainController.js"></script>
  </head>
	<body ng-app="RnavApp">
	
	<p><a href="#/">Main</a></p>
	
	<a href="#red">Red</a>
	<a href="#green">Green</a>
	<a href="#blue">Blue</a>
	
	<object width=100% height=1000px>
	   <div ng-view></div>
	</object>
	</body>
</html>