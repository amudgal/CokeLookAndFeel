/** Created by Amit Kumar Mudgal (MicroStrategy Senior Principal Consultant) 
 *  Date: 6/1/2017
 *  
 * **/
var localscopeLastLvl = "";
var SrcJSON = "";
var badgePath="../plugins/CokeLookAndFeel/style/images/ccna/badges";
var selections =[];
 
$( document ).ready(function() {
    var lastClicked = {"lvl":"5"};
    console.log( "ready!");
    //TO-DO Call function to get the data from cookies.
    var response = jQuery.parseJSON( getCookieVal('Options').replace('/"/g','').replace(/'/g,'"'));
    SrcJSON = response; 
                 
                 for(var i = 0; i < response.length; i++){
                    // console.log(response[i].lvl);
                     for(var j = 0; j < response[i].sel.length; j++){
                    	 //console.log("*************"+response[i].sel[j].nm);
                    	 var imageName ="";
                    	 if(response[i].sel[j].acl=='Y'){  
                    		 imageName = response[i].sel[j].nm; 
                    	 }else{
                    		 if(!(response[i].sel[j].nm.indexOf("_GR") > 0))
                    		   imageName = response[i].sel[j].nm + "_GR";
                    	 }
                         $("<div idDiv=\""+response[i].sel[j].nm +"\" style=\"float: left!important;display: inline!important;\"><figure><img class=\"badgeImage\" id=\""+response[i].sel[j].nm +"\"" +
                         		 " lvl=\"" + response[i].lvl + "\"" + 
                         		 " idNo=\"" + response[i].sel[j].id + "\"" +
                         		 " style=\"max-width: 100%;height: auto;margin:auto;display:block;\""+
                        		 " src=\""+ badgePath +"/"+imageName+".png\"><figcaption style=\"font-weight: bold; font-size: 60%; text-align: center; padding-top: 5px;\">"+response[i].sel[j].nm+"</figcaption><figure></div>").appendTo("div#lvl"+response[i].lvl);
                         
                     }
                 }
                 
    $(".badgeImage").click(function(){
    	//if(!($(this).attr('lvl')>5)){  // REQ1: Last level ie 6 , should not be selectable. 
	        var image = $(this).attr('src').replace(badgePath+'/','');
	        var activeFlag ="";
	        if($(this).attr('src').indexOf("_GR") != -1){
	        	console.log("Not Grey image" + image);
	        	$(this).attr('src',badgePath+ '/'+ image.replace('_GR.png','.png'));
	            lastClicked.lvl=$(this).attr('lvl');
	            activeFlag="Y";
	        }else{
	        	console.log("Grey image" + image);
	        	$(this).attr('src',badgePath+ '/'+ image.replace('.png','_GR.png'));
	        	activeFlag="N";
	        }
	        if(!($(this).attr('lvl')>5)){
		        reflectChanges(treeTraverse(response,$(this).attr('lvl'),$(this).attr('idNo'),activeFlag));
		    	console.log("Clicked button "+ $(this).attr('id'));
		        console.log("Inner Tag "+ $(this).attr('src'));
		        console.log("Last level clicked::" + lastClicked.lvl)
		        localscopeLastLvl=lastClicked.lvl;
	        }
	        
        //}
	        ShowEverything();
    });
    var substringMatcher = function(strs) {
    	//console.log(q+"  "+cb)  ;
  	  return function findMatches(q, cb) {
  		
  	    var matches, substringRegex;

  	    // an array that will be populated with substring matches
  	    matches = [];

  	    // regex used to determine if a string contains the substring `q`
  	    substrRegex = new RegExp(q, 'i');

  	    // iterate through the pool of strings and for any string that
  	    // contains the substring `q`, add it to the `matches` array
  	    $.each(strs, function(i, str) {
  	      
  	      if (substrRegex.test(str)) {
  	        matches.push(str);
  	        console.log("content:"+str);
  	        
  	      }
  	    });
  	    FilterSelections(matches);
  	    //var myVal = $('.typeahead').typeahead('val');
  	   /* var myVal = $('input[id=in]').val();
  	    console.log(myVal);*/
  	    cb(matches);
  	  };
  	};

  	var badges = getAllBadges(); 
  	$('#the-basics .typeahead').typeahead({
  	  hint: true,
  	  highlight: true,
  	  minLength: 1
  	},
  	{
  	  name: 'badges',
  	  source: substringMatcher(badges)
  	});
    function getAllBadges(){
  	var arrBadges=[];
  	for(var i = 0; i < SrcJSON.length; i++){
  		for(var j = 0; j < SrcJSON[i].sel.length; j++){
  			arrBadges.push(SrcJSON[i].sel[j].nm);
  		}
  	}
  	//console.log(arrBadges);
  	return arrBadges;
  }
    
    $('#in').keyup(function () { if(document.getElementById('in').value ==""){
    	ShowEverything();
    } });
    
});

var treeTraverse = function(SrcJSON,lvl_Clicked,itmClcked,activeFlag){
	//console.log("::::treeTraverse(Level Clicked):::"+lvl_Clicked);
	//console.log("::::treeTraverse(Item Clicked):::"+itmClcked);
	//console.log("::::treeTraverse (JSON):::"+SrcJSON[1].lvl);
	var JSONObjSel=[];
	var arrObj=[];
	//Push down logic
	for(var i = 0; i < SrcJSON[lvl_Clicked].sel.length; i++){
		if(SrcJSON[lvl_Clicked].sel[i].pl==itmClcked){
			//console.log(SrcJSON[lvl_Clicked].sel[i].id + " Activated ??" + activeFlag);
			item = {};
            item["id"] = SrcJSON[lvl_Clicked].sel[i].id; 			
		    item["flg"] = activeFlag;
		    arrObj.push([SrcJSON[lvl_Clicked].sel[i].id,activeFlag]);
		    JSONObjSel.push(item);
		}
	}
	if(lvl_Clicked<5){
		lvl_Clicked++;
		for(var i=0;i<JSONObjSel.length;i++ ){
			arrObj.push.apply(arrObj,treeTraverse(SrcJSON,lvl_Clicked,JSONObjSel[i].id,activeFlag));
		}
	}
	console.log(arrObj);
	return arrObj;
}

function reflectChanges(ActionArrObj){
	for(var i = 0; i < ActionArrObj.length; i++){
		//console.log(ActionArrObj[i][0] + ","+ActionArrObj[i][1]);
		console.log($('img[idNo='+ActionArrObj[i][0]+']').attr('src'));
		var image = $('img[idNo='+ActionArrObj[i][0]+']').attr('src').replace(badgePath+'/','');
		if(ActionArrObj[i][1]=="Y" || (image.indexOf("_GR") > 0)){
			$('img[idNo='+ActionArrObj[i][0]+']').attr('src',badgePath+ '/'+ image.replace('_GR.png','.png'));
		}else{
			$('img[idNo='+ActionArrObj[i][0]+']').attr('src',badgePath+ '/'+ image.replace('.png','_GR.png'));
		}
	}
}

function SaveVals(){
     
	console.log($('img[idNo]').length + "," +localscopeLastLvl);
	document.cookie = "ctracker="+localscopeLastLvl+"; path=/";
	alert("Changes Applied");
	document.getElementById('nav-container').focus();
	formatAnswer(SrcJSON,1);
	/*$('#myModal').css({
        'display': 'none'
    });*/
	document.cookie = "selections="+selections+"; path=/";
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
      //  	console.log(c);
      //  	console.log(c.substring(name.length, c.length).replace('/"/g','').replace(/'/g,'"'));
        	var retStr = c.substring(name.length, c.length).replace('/"/g','').replace(/'/g,'"');
            return retStr.substring(1,retStr.length-1);
        }
    }
    return "";
}

var formatAnswer = function(SrcJSON,lvl){
	var JSONObjSel=[];
	var arrObj=[];
	//Push down logic
	var strBuilder = "";
	var strBuilder6="";
	var strBuilder5="";
	var strBuilder4="";
	var strBuilder3="";
	for(var i = 0; i < SrcJSON[lvl].sel.length; i++){
		if(!($('img[idNo='+SrcJSON[lvl].sel[i].id +']').attr('src').indexOf('_GR') > 0) ){
			
		//	console.log(SrcJSON[lvl].sel[i].id + ' ' + $('img[idNo='+SrcJSON[lvl].sel[i].id +']').attr('src'));
			//var strBuilderLvl2 = strBuilderLvl1 + "," + SrcJSON[lvl].sel[i].id;  // Level 2
			strBuilder = "100," + SrcJSON[lvl].sel[i].id;
			element=SrcJSON[lvl].sel[i].id;
			console.log("Level 2:"+element);
			if(doesChildExist(SrcJSON,lvl+1,element)){
				for(var j = 0; j < SrcJSON[lvl+1].sel.length; j++){ // Level 3
					console.log("Does "+SrcJSON[lvl+1].sel[j].id + " belong in list ?");
					if(!($('img[idNo='+SrcJSON[lvl+1].sel[j].id +']').attr('src').indexOf('_GR') > 0)&& childrenList(SrcJSON,lvl+1,element).indexOf(SrcJSON[lvl+1].sel[j].id) > 0){
			//		  console.log(doesChildExist(SrcJSON,lvl+1,element));
			//		  console.log("Level 3:::"+ SrcJSON[lvl+1].sel[j].id + ' ' + $('img[idNo='+SrcJSON[lvl+1].sel[j].id +']').attr('src'));
					  element=SrcJSON[lvl+1].sel[j].id;
					  strBuilder3 = strBuilder + "," + SrcJSON[lvl+1].sel[j].id;
					  console.log("Level 3: "+element);
					  if(doesChildExist(SrcJSON,lvl+2,element)){
						  for(var k = 0; k < SrcJSON[lvl+2].sel.length; k++){ // Level 4
							  console.log("Check for::"+SrcJSON[lvl+2].sel[k].id);		  
							  if(!($('img[idNo='+SrcJSON[lvl+2].sel[k].id +']').attr('src').indexOf('_GR') > 0)&& childrenList(SrcJSON,lvl+2,element).indexOf(SrcJSON[lvl+2].sel[k].id) > 0){
			//					  console.log("Level 4:::"+ SrcJSON[lvl+2].sel[k].id + ' ' + $('img[idNo='+SrcJSON[lvl+2].sel[k].id +']').attr('src'));
								  element=SrcJSON[lvl+2].sel[k].id;
								  strBuilder4 = strBuilder3 + "," + SrcJSON[lvl+2].sel[k].id;
								  console.log("Level 4: "+element);
								  if(doesChildExist(SrcJSON,lvl+3,element)){
									  for(var l = 0; l < SrcJSON[lvl+3].sel.length; l++){ // Level 5
										  console.log("Check for::"+SrcJSON[lvl+3].sel[l].id);
										  if(!($('img[idNo='+SrcJSON[lvl+3].sel[l].id +']').attr('src').indexOf('_GR') > 0)&& childrenList(SrcJSON,lvl+3,element).indexOf(SrcJSON[lvl+3].sel[l].id) > 0){
			//								  console.log("Level 5:::"+ SrcJSON[lvl+3].sel[l].id + ' ' + $('img[idNo='+SrcJSON[lvl+3].sel[l].id +']').attr('src'));
											  element=SrcJSON[lvl+3].sel[l].id;
											  strBuilder5 = strBuilder4 + "," + SrcJSON[lvl+3].sel[l].id;
											  console.log("Level 5: "+element);
											  if(doesChildExist(SrcJSON,lvl+4,element)){
												  for(var m = 0; m < SrcJSON[lvl+4].sel.length; m++){ // Level 4
													  console.log("Check for::"+SrcJSON[lvl+4].sel[m].id);
													  if(!($('img[idNo='+SrcJSON[lvl+4].sel[m].id +']').attr('src').indexOf('_GR') > 0)&& childrenList(SrcJSON,lvl+4,element).indexOf(SrcJSON[lvl+4].sel[m].id) > 0){
														  strBuilder6 = strBuilder5 + "," + SrcJSON[lvl+4].sel[m].id;
				//										  console.log("Level 6:::"+ SrcJSON[lvl+4].sel[m].id + ' ' + $('img[idNo='+SrcJSON[lvl+4].sel[m].id +']').attr('src'));
														  console.log("-------------------------------"+strBuilder6);
														  selections.push(strBuilder6);
													  }	 
													  strBuilder6="";
													  console.log(strBuilder5);
												  }
											  }else{
												  console.log("-------------------------------"+strBuilder5);
												  selections.push(strBuilder5);
											  }
										  }	
										  strBuilder5="";
										  console.log(strBuilder4);
										  element = SrcJSON[lvl+2].sel[k].id;
									  }
								  }else{
									  console.log("-------------------------------"+strBuilder4);
									  selections.push(strBuilder4);
								  }
							  }
							  strBuilder4="";
							  console.log(strBuilder3);
							  element = SrcJSON[lvl+1].sel[j].id;
						  }
					  }else{
						  console.log("-------------------------------"+strBuilder3);
						  selections.push(strBuilder3);
						  
					  }

					}
					strBuilder3="";
					console.log(strBuilder);
					element=SrcJSON[lvl].sel[i].id;
				}	
			}else{
				// Level 2 Child doesnt exist
				console.log("-------------------------------"+strBuilder);
				selections.push(strBuilder);
			}
		}
		strBuilder="";
	}
	/*if(lvl<5){
		lvl++;
		for(var i=0;i<JSONObjSel.length;i++ ){
			arrObj.push.apply(arrObj,treeTraverse(SrcJSON,lvl_Clicked,JSONObjSel[i].id,activeFlag));
		}
	}*/
	console.log();
	return arrObj;
}

function doesChildExist(SrcJSON,level,element){
	
	for(var i = 0; i < SrcJSON[level].sel.length; i++){
	  if(SrcJSON[level].sel[i].pl==element){
		  return true;
	  }
	}
	return false;
}

function childrenList(SrcJSON,level,element){
	var list ="|";
	for(var i = 0; i < SrcJSON[level].sel.length; i++){
		  if(SrcJSON[level].sel[i].pl==element){
		    list = list + "," + SrcJSON[level].sel[i].id  ;
		  }
	}
	console.log("Child List::"+ list);
	return list;
}

function FilterSelections(selections){
	
		for(var i = 0; i < SrcJSON.length; i++){
	  		for(var j = 0; j < SrcJSON[i].sel.length; j++){
	  			$('div[idDiv=\"'+SrcJSON[i].sel[j].nm +'\"]').attr('style','display:none');
		  	}
	  	}
		for(var i = 0; i< selections.length;i++){
			$('div[idDiv=\"'+selections[i] +'\"]').attr('style','\"float: left!important;display:inline!important;\"');
		}
}

function ShowEverything(){
	for(var i = 0; i < SrcJSON.length; i++){
  		for(var j = 0; j < SrcJSON[i].sel.length; j++){
  			$('div[idDiv=\"'+SrcJSON[i].sel[j].nm +'\"]').attr('style','\"float: left!important;display:inline!important;\"');
	  	}
  	}
}




/*$('input[id=in]').focus(function() {
    console.log('in');
}).blur(function() {
    console.log('out'+pointer);
    if(!(pointer=='auto')){
        ShowEverything();
        $('input[id=in]').clearForm();
    }else{
    	console.log("pointer is "+pointer);
    }

});


var pointer = $('*').mouseenter(function(){
    return $(this).css('cursor') ;
});
*/

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


/*var response =  [
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

*/           
