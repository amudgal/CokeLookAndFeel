/** Created by Amit Kumar Mudgal (MicroStrategy Senior Principal Consultant) 
 *  Date: 6/1/2017
 *  
 * **/
var localscope = "";
var badgePath="../plugins/CokeLookAndFeel/style/images/ccna/badges";
 
$( document ).ready(function() {
    var lastClicked = {"lvl":"5"};
    console.log( "ready!" + window.localscope );
    //TO-DO Call function to get the data from cookies.
    
    var response =  [
                     {"lvl":"1","sel":[{ "id":"100","nm":"CCNA","acl":"Y","pl":"000"}]},
                     {"lvl":"2","sel":[{ "id":"200","nm":"US Ops","acl":"Y","pl":"100" },
                                       { "id":"201","nm":"Fountain","acl":"Y","pl":"100" },
                                       { "id":"202","nm":"Warehouse","acl":"Y","pl":"100" },
                                       { "id":"203","nm":"VEB","acl":"Y","pl":"100" },
                                       { "id":"204","nm":"Canada","acl":"Y","pl":"100" },
                                       { "id":"205","nm":"Supply Chain","acl":"Y","pl":"100" },
                                       { "id":"206","nm":"Enabling Functions","acl":"Y","pl":"100" },
                                       { "id":"207","nm":"HQ","acl":"Y","pl":"100" }]},
                     {"lvl":"3","sel":[{ "id":"300","nm":"Brands","acl":"Y","pl":"200" },
                                       { "id":"301","nm":"Strategic Marketing","acl":"Y","pl":"200"},
                                       { "id":"302","nm":"National Sales HQ","acl":"Y","pl":"200"},
                                       { "id":"303","nm":"Franchise & Commercial","acl":"Y","pl":"200"},
                                       { "id":"304","nm":"US Ops HQ","acl":"Y","pl":"200" },
                                       { "id":"305","nm":"CCNA PAC","acl":"Y","pl":"206" },
                                       { "id":"306","nm":"Latin Affairs","acl":"Y","pl":"206" },
                                       { "id":"307","nm":"CCNA HR","acl":"Y","pl":"206" },
                                       { "id":"308","nm":"CCNA IT","acl":"Y","pl":"206" },
                                       { "id":"309","nm":"CCNA Finance","acl":"Y","pl":"206" },
                                       { "id":"310","nm":"CCNA OOTP","acl":"Y","pl":"206" },
                                       { "id":"311","nm":"R&D","acl":"Y","pl":"206" },
                                       { "id":"312","nm":"Strategy","acl":"Y","pl":"206" },
                                       { "id":"313","nm":"Security","acl":"Y","pl":"206" },
                                       { "id":"314","nm":"NACG","acl":"Y","pl":"207" },
                                       { "id":"315","nm":"Corp Charges","acl":"Y","pl":"207" },
                                       { "id":"316","nm":"CCNA Group Charges","acl":"Y","pl":"207" },
                                       { "id":"317","nm":"NPSG","acl":"Y","pl":"207" }
                                       ]},
                     {"lvl":"4","sel":[{ "id":"400","nm":"Sparkling","acl":"Y","pl":"300" },
                                       { "id":"401","nm":"Glaceau","acl":"Y","pl":"300" },
                                       { "id":"402","nm":"TeaCoffee","acl":"Y","pl":"300" },
                                       { "id":"403","nm":"Juice","acl":"Y","pl":"300" },
                                       { "id":"404","nm":"Still AO","acl":"Y","pl":"300" }]},    
                     {"lvl":"5","sel":[{ "id":"500","nm":"Coca-Cola Portfolio","acl":"Y","pl":"400" },
                                       { "id":"501","nm":"Sprite Flavors","acl":"Y","pl":"400" },
                                       { "id":"502","nm":"Sparkling HQAO","acl":"Y","pl":"400" },
                                       { "id":"503","nm":"Vitaminwater TM","acl":"Y","pl":"401" },
                                       { "id":"504","nm":"Smartwater TM","acl":"Y","pl":"401" },
                                       { "id":"505","nm":"Powerade TM","acl":"Y","pl":"401" },
                                       { "id":"506","nm":"Dasani TM","acl":"Y","pl":"401" },
                                       { "id":"507","nm":"Glaceau HQAO","acl":"Y","pl":"401" },
                                       { "id":"508","nm":"Total Tea","acl":"Y","pl":"402" },
                                       { "id":"509","nm":"Total Coffee","acl":"Y","pl":"402" },
                                       { "id":"510","nm":"TeaCoffee HQ","acl":"Y","pl":"402" },
                                       { "id":"511","nm":"Juice Juice Drink","acl":"Y","pl":"403" },
                                       { "id":"512","nm":"Juice HQ","acl":"Y","pl":"403" }
                                       ]},                  
                      {"lvl":"6","sel":[{ "id":"600","nm":"Coke TM","acl":"Y","pl":"511" },
                                        { "id":"601","nm":"Diet Coke TM","acl":"Y","pl":"511" },
                                        { "id":"602","nm":"Coke Zero TM","acl":"Y","pl":"511" },
                                        { "id":"603","nm":"Sprite TM","acl":"Y","pl":"502" },
                                        { "id":"604","nm":"Fanta TM","acl":"Y","pl":"502" },
                                        { "id":"605","nm":"Seagrams TM","acl":"Y","pl":"502" },
                                        { "id":"606","nm":"AO Flavors","acl":"Y","pl":"502" },
                                        { "id":"607","nm":"Sparkling GPIE","acl":"Y","pl":"500" },
                                        { "id":"608","nm":"Sparkling HQ","acl":"Y","pl":"500" },
                                        { "id":"609","nm":"Vitaminwater Base","acl":"Y","pl":"503" },
                                        { "id":"610","nm":"Smartwater Base","acl":"Y","pl":"504" },
                                        { "id":"611","nm":"Powerade Base","acl":"Y","pl":"505" },
                                        { "id":"612","nm":"Dasani Base","acl":"Y","pl":"506" },
                                        { "id":"613","nm":"Glaceau Puerto Rico","acl":"Y","pl":"507" },
                                        { "id":"614","nm":"AO Water","acl":"Y","pl":"507" },
                                        { "id":"615","nm":"Glaceau AO","acl":"Y","pl":"507" },
                                        { "id":"616","nm":"Gold Peak TM","acl":"Y","pl":"509" },
                                        { "id":"617","nm":"Honest TM","acl":"Y","pl":"509" },
                                        { "id":"618","nm":"Fuze TM","acl":"Y","pl":"509" },
                                        { "id":"619","nm":"Dunkin TM","acl":"Y","pl":"510" },
                                        { "id":"620","nm":"AO Coffee","acl":"Y","pl":"510" },
                                        { "id":"621","nm":"MM Refreshment","acl":"Y","pl":"512" },
                                        { "id":"622","nm":"MM JTG","acl":"Y","pl":"512" },
                                        { "id":"623","nm":"MM Sparkling","acl":"Y","pl":"512" },
                                        { "id":"624","nm":"AO Juice","acl":"Y","pl":"512" }
                                        ]}
                 ];

                 
                 for(var i = 0; i < response.length; i++){
                     console.log(response[i].lvl);
                     
                     for(var j = 0; j < response[i].sel.length; j++){
                    	 //console.log("*************"+response[i].sel[j].nm);
                    	 var imageName ="";
                    	 if(response[i].sel[j].acl=='Y'){  
                    		 imageName = response[i].sel[j].nm; 
                    	 }else{
                    		 imageName = response[i].sel[j].nm + "_GR";
                    	 }
                         $("<img class=\"badgeImage\" id=\""+response[i].sel[j].nm +"\"" +
                         		 " lvl=\"" + response[i].lvl + "\"" + 
                         		 " id=\"" + response[i].sel[j].id + "\"" +
                        		 " src=\""+ badgePath +"/"+imageName+".png\">").appendTo("div#lvl"+response[i].lvl);
                     }
                 }
                 
    $(".badgeImage").click(function(){
    	if(!($(this).attr('lvl')>5)){  // REQ1: Last level ie 6 , should not be selectable. 
	        var image = $(this).attr('src').replace(badgePath+'/','');
	        if($(this).attr('src').indexOf("_GR") != -1){
	        	console.log("Not Grey image" + image);
	        	$(this).attr('src',badgePath+ '/'+ image.replace('_GR.png','.png'));
	            lastClicked.lvl=$(this).attr('lvl');	
	        }else{
	        	console.log("Grey image" + image);
	        	$(this).attr('src',badgePath+ '/'+ image.replace('.png','_GR.png'));
	        }
	        treeTraverse(response,$(this).attr('lvl'),$(this).attr('id'));
	    	console.log("Clicked button "+ $(this).attr('id'));
	        console.log("Inner Tag "+ $(this).attr('src'));
	        console.log("Last level clicked::" + lastClicked.lvl)
	        
        }
    });
    
});


// TODO Traverse the tree to find hierarchy 

function treeTraverse(SrcJSON,lvl_Clicked,itmClcked){
	console.log("::::treeTraverse(Level Clicked):::"+lvl_Clicked);
	console.log("::::treeTraverse(Item Clicked):::"+itmClcked);
	console.log("::::treeTraverse (JSON):::"+SrcJSON);
	//Push down logic
	for(int i=lvl_Clicked)
	var JSON="";
	return JSON;
}

function sameLevelCheck(){
	return "";
}

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

/*$(".badgeImage").hover(function(){
var image = $(this).attr('src').replace(badgePath+"/","").replace(".png","");
if($(this).attr('src').indexOf("_GR") != -1){
  console.log($(this).attr('src').replace(badgePath+"/","").replace(".png",""));
  $(this).attr('src',badgePath+ '/' + image + '_GR.png');
}else{
  $(this).attr('src',badgePath+ '/' + image + '.png');		
}
},function(){
$(this).attr('src','../plugins/CokeLookAndFeel/style/images/ccna/badges/AO Water.png');
})
        //$(this).attr('src','../plugins/CokeLookAndFeel/style/images/ccna/badges/dunkin.png'); 

*
*/
