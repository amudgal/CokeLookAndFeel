/** Created by Amit Kumar Mudgal (Senior Principal Consultant) 
 * 
 * **/
var localscope = "";
var badgePath="../plugins/CokeLookAndFeel/style/images/ccna/badges";
 
$( document ).ready(function() {
    
    console.log( "ready!" + window.localscope );
    //TO-DO Call function to get the data from cookies.
    
    var response =  [
                     {"lvl":"1","sel":[{ "nm":"CCNA","acl":"Y" }]},
                     {"lvl":"2","sel":[{ "nm":"US Ops","acl":"Y" },
                                       { "nm":"Fountain","acl":"Y" },
                                       { "nm":"Warehouse","acl":"Y" },
                                       { "nm":"VEB","acl":"Y" },
                                       { "nm":"Canada","acl":"Y" },
                                       { "nm":"Supply Chain","acl":"Y" },
                                       { "nm":"Enabling Functions","acl":"Y" },
                                       { "nm":"HQ","acl":"Y" }]},
                     {"lvl":"3","sel":[{ "nm":"Brands","acl":"Y" },
                                       { "nm":"Strategic Marketing","acl":"Y"},
                                       { "nm":"National Sales HQ","acl":"Y"},
                                       { "nm":"Franchise & Commercial","acl":"Y"},
                                       { "nm":"US Ops HQ","acl":"Y" },
                                       { "nm":"CCNA PAC","acl":"Y" },
                                       { "nm":"Latin Affairs","acl":"Y" },
                                       { "nm":"CCNA HR","acl":"Y" },
                                       { "nm":"CCNA IT","acl":"Y" },
                                       { "nm":"CCNA Finance","acl":"Y" },
                                       { "nm":"CCNA OOTP","acl":"Y" },
                                       { "nm":"R&D","acl":"Y" },
                                       { "nm":"Strategy","acl":"Y" },
                                       { "nm":"Security","acl":"Y" },
                                       { "nm":"NACG","acl":"Y" },
                                       { "nm":"Corp Charges","acl":"Y" },
                                       { "nm":"CCNA Group Charges","acl":"Y" },
                                       { "nm":"NPSG","acl":"Y" }
                                       ]},
                     {"lvl":"4","sel":[{ "nm":"Sparkling","acl":"Y" },
                                       { "nm":"Glaceau","acl":"Y" },
                                       { "nm":"TeaCoffee","acl":"Y" },
                                       { "nm":"Juice","acl":"Y" },
                                       { "nm":"Still AO","acl":"Y" }]},    
                     {"lvl":"5","sel":[{ "nm":"Coca-Cola Portfolio","acl":"Y" },
                                       { "nm":"Sprite Flavors","acl":"Y" },
                                       { "nm":"Sparkling HQAO","acl":"Y" },
                                       { "nm":"Vitaminwater TM","acl":"Y" },
                                       { "nm":"Smartwater TM","acl":"Y" },
                                       { "nm":"Powerade TM","acl":"Y" },
                                       { "nm":"Dasani TM","acl":"Y" },
                                       { "nm":"Glaceau HQAO","acl":"Y" },
                                       { "nm":"Total Tea","acl":"Y" },
                                       { "nm":"Total Coffee","acl":"Y" },
                                       { "nm":"TeaCoffee HQ","acl":"Y" },
                                       { "nm":"Juice Juice Drink","acl":"Y" },
                                       { "nm":"Juice HQ","acl":"Y" }
                                       ]},                  
                      {"lvl":"6","sel":[{ "nm":"Coke TM","acl":"Y" },
                                        { "nm":"Diet Coke TM","acl":"Y" },
                                        { "nm":"Coke Zero TM","acl":"Y" },
                                        { "nm":"Sprite TM","acl":"Y" },
                                        { "nm":"Fanta TM","acl":"Y" },
                                        { "nm":"Seagrams TM","acl":"Y" },
                                        { "nm":"AO Flavors","acl":"Y" },
                                        { "nm":"Sparkling GPIE","acl":"Y" },
                                        { "nm":"Sparkling HQ","acl":"Y" },
                                        { "nm":"Vitaminwater Base","acl":"Y" },
                                        { "nm":"Smartwater Base","acl":"Y" },
                                        { "nm":"Powerade Base","acl":"Y" },
                                        { "nm":"Dasani Base","acl":"Y" },
                                        { "nm":"Glaceau Puerto Rico","acl":"Y" },
                                        { "nm":"AO Water","acl":"Y" },
                                        { "nm":"Glaceau AO","acl":"Y" },
                                        { "nm":"Gold Peak TM","acl":"Y" },
                                        { "nm":"Honest TM","acl":"Y" },
                                        { "nm":"Fuze TM","acl":"Y" },
                                        { "nm":"Dunkin TM","acl":"Y" },
                                        { "nm":"AO Coffee","acl":"Y" },
                                        { "nm":"MM Refreshment","acl":"Y" },
                                        { "nm":"MM JTG","acl":"Y" },
                                        { "nm":"MM Sparkling","acl":"Y" },
                                        { "nm":"AO Juice","acl":"Y" }
                                        ]}
                 ];

                 
                 for(var i = 0; i < response.length; i++){
                     console.log(response[i].lvl);  
                     for(var j = 0; j < response[i].sel.length; j++){
                    	 console.log("*************"+response[i].sel[j].nm);
                    	 var imageName ="";
                    	 if(response[i].sel[j].acl=='Y'){
                    		 imageName = response[i].sel[j].nm; 
                    	 }else{
                    		 imageName = response[i].sel[j].nm + "_GR";
                    	 }
                         $("<img class=\"badgeImage\" id=\""+response[i].sel[j].nm +"\" src=\""+ badgePath +"/"+imageName+".png\">").appendTo("div#lvl"+response[i].lvl);
                     }
                 }
                 
    $(".badgeImage").hover(function(){
    	var image = $(this).attr('src').replace(badgePath+"/","").replace(".png","");
    	if($(this).attr('src').indexOf("_GR") != -1){
    	  console.log($(this).attr('src').replace(badgePath+"/","").replace(".png",""));
    	  $(this).attr('src',badgePath+ '/' + image + '_GR.png');
    	}else{
    	  $(this).attr('src',badgePath+ '/' + image + '.png');		
    	}
    }/*,function(){
    	$(this).attr('src','../plugins/CokeLookAndFeel/style/images/ccna/badges/AO Water.png');
    }*/).click(function(){
        $(this).attr('src','../plugins/CokeLookAndFeel/style/images/ccna/badges/dunkin.png'); 
    	console.log("Clicked button "+ $(this).attr('id'));
        console.log("Inner Tag "+ $(this).attr('src'));
    });
    
});



// TO-DO toggle function , then save in some variable

// TO-DO Save function attached to Modal save. It will save the prompts in cookies.


// Unused ........ 
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

/*  var data = {
"i_name":"<img  id=\"CCNA\" src=\"../plugins/CokeLookAndFeel/style/images/ccna/badges/AO Water.png\">," +
         "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">B</button>," +
         "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">C</button>," +
         "<button class=\"w3-button w3-xlarge w3-circle w3-teal\">D</button>" 
};
var array = data.i_name.split(',');
for (a in array ) {
$(array[a]).appendTo("div#level1");
}
*/


