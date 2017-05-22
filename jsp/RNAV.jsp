<%@ page  language="java" errorPage="" %>
<%
String Project="MicroStrategy+Tutorial";
String DocumentID="262A4EF8446047CB2D1C53A9F1D04B34";
%>

<!DOCTYPE html>
<html >
  <head>
     <title>Coca-Cola</title>
     <script type="text/javascript" src="../plugins/CokeLookAndFeel/vendors/angular/angular.min.js"></script>
     <script type="text/javascript" src="../plugins/CokeLookAndFeel/vendors/angular-route/angular-route.min.js"></script>
     <script type="text/javascript" src="../plugins/CokeLookAndFeel/Controllers/MainController.js"></script>
     
     <link rel="stylesheet" type="text/css" href="../plugins/CokeLookAndFeel/style/theme.css">
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>

  <body ng-app="RnavApp" id='ng-app'>
     
     <div class="topnav">
       <ul>
         <li style="float:left" padding-top: 3px padding-bottom: 3px><img src="../plugins/CokeLookAndFeel/style/images/coke_logo.png"></img></li>
         <li style="float:right" padding-top: 3px padding-bottom: 3px width="10" height="10"><img src="../plugins/CokeLookAndFeel/style/images/coke_pdf.png"></img></li>
         <li style="float:right"><a class="active" href="#reports">Reports</a></li>
	     <li style="float:right"><a href="#briefingbooks">Briefing Books</a></li>
	     <li style="float:right"><a href="#strategy">Strategy</a></li>
	     <li style="float:right"><a href="#finance">Finance</a></li>
	     <li style="float:right" padding-top: 3px padding-bottom: 3px><img src="../plugins/CokeLookAndFeel/style/images/coke_home.png"></img></li>
	     
       </ul>
       
        <div ng-view></div>
	 	
     <object width=100% height=1000px type="text/html" data="mstrWeb?Project=<%=Project%>&Port=0&evt=2048001&src=mstrWeb.2048001&documentID=<%=DocumentID%>&hiddensections=header,path,dockTop,dockLeft,footer">
     </object>
     
     
     
  </body>
</html>