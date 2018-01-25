$(function(){

$("#inputnumber").keyup(function(){
	var str = $("#inputnumber").val();
	
	if(str==""){	
		$("#numspan").css({"display":"block"});	
	}else{
		$("#numspan").css({"display":"none"});		 
	}
});
$("#inputpass").keyup(function(){
	var str = $("#inputpass").val();
	
	if(str==""){	
		$("#passspan").css({"display":"block"});	
	}else{
		$("#passspan").css({"display":"none"});		 
	}
});



});
