app.controller('ModalController', function($scope, close) {
    $scope.response = jQuery.parseJSON( getCookieVal('Options').replace('/"/g','').replace(/'/g,'"'));
    $scope.badgePath="../plugins/CokeLookAndFeel/style/images/ccna/badges";
    for(var i = 0; i < $scope.response.length; i++){
      // console.log(response[i].lvl);
      for(var j = 0; j < $scope.response[i].sel.length; j++){
        //console.log("*************"+response[i].sel[j].nm);
        var imageName ="";
        if($scope.response[i].sel[j].acl=='Y'){  
           imageName = $scope.response[i].sel[j].nm; 
         }else{
            if(!($scope.response[i].sel[j].nm.indexOf("_GR") > 0))
               imageName = $scope.response[i].sel[j].nm + "_GR";
              }
            var StrDiv = "<div idDiv=\""+$scope.response[i].sel[j].nm +"\" style=\"float: left!important;display: inline!important;\"><figure><img class=\"badgeImage\" id=\""+$scope.response[i].sel[j].nm +"\"" +
    		 " lvl=\"" + $scope.response[i].lvl + "\"" + 
     		 " idNo=\"" + $scope.response[i].sel[j].id + "\"" +
     		 " style=\"max-width: 100%;height: auto;margin:auto;display:block;\""+
    		 " src=\""+ $scope.badgePath +"/"+imageName+".png\"><figcaption style=\"font-weight: bold; font-size: 60%; text-align: center; padding-top: 5px;\">"+$scope.response[i].sel[j].nm+"</figcaption><figure></div>";
            console.log(StrDiv);
            $(StrDiv).appendTo("div#lvl"+$scope.response[i].lvl);
                         
        }
      }	
 $scope.close = function(result) {
 	close(result, 500); // close, but give 500ms for bootstrap to animate
 };
 $scope.SaveVals = function SaveVals(){
	 console.log('Save clicked');
 }
 
 function getCookieVal(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	        	var retStr = c.substring(name.length, c.length).replace('/"/g','').replace(/'/g,'"');
	            return retStr.substring(1,retStr.length-1);
	        }
	    }
	    return "";
	}
});