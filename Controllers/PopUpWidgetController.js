/*var PopApp = angular.module('PopUpApp', []);

PopApp.controller('PopAppController', function($scope) {
	var data = {
		    "i_name":"<button class=\"w3-button w3-xlarge w3-circle w3-teal\">A</button>," +
		             "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">B</button>," +
		             "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">C</button>," +
		             "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">D</button>" 
		};
        console.log("Saw the images!!");
		$scope.images = data.i_name.split(',');
	
});*/

$( document ).ready(function() {
    console.log( "ready!" );
    var data = {
		    "i_name":"<button class=\"w3-button w3-xlarge w3-circle w3-teal\">A</button>," +
		             "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">B</button>," +
		             "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">C</button>," +
		             "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">D</button>" 
		};
    var array = data.i_name.split(',');
    for (a in array ) {
    	$(array[a]).appendTo("div#level1");
    }
    $("<button class=\"w3-button w3-xlarge w3-circle w3-black\">D</button>").appendTo("div#level1");
});