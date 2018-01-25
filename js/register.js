$(function(){
	//var checkpass = false;
	var allcheck =true;
	var arr = [0,0,0];
	
	
$("#phonetext").blur(function(){
	var str = $("#phonetext").val();
	var type = "phone";
	if(checkAll(type,str)){
		$("#rightsphone").css({"display":"block"});
		$("#errphone").css({"opacity":"0"});
		arr[0]=1;
	}else{
		$("#rightsphone").css({"display":"none"});
		$("#errphone").css({"opacity":"1"});
		
	   
	}
});
$("#emailtext").blur(function(){
	var str = $("#emailtext").val();
	var type = "email";
	if(checkAll(type,str)){
		$("#rightsmail").css({"display":"block"});
		$("#errmail").css({"opacity":"0"});
		 arr[1]=1;
	}else{
		$("#errmail").css({"opacity":"1"});
		$("#rightsmail").css({"display":"none"});
		
	}
});
$("#passtext").blur(function(){
	var str = $("#passtext").val();
	var type = "password";
	if(checkAll(type,str)){
		$("#rightspass").css({"display":"block"});
		$("#errpass").css({"opacity":"0"});
		arr[2]=1;
	}else{
		$("#rightspass").css({"display":"none"});
		$("#errpass").css({"opacity":"1"});
		 
	}
});

$("#checkmatext").blur(function(){
	var str = $("#checkmatext").val();
	//var type = "password";
	if(str==$("#randoms").val()){
		
		$("#rightsma").css({"display":"block"});
		$("#errma").css({"opacity":"0"});
		//arr[2]=1;
	}else{
		$("#rightsma").css({"display":"none"});
		$("#errma").css({"opacity":"1"});
		 
	}
});
function checkAll(type,str){
		switch(type){
		//case "username": var reg=/\w{5,8}/;break;
		case "email": var reg=/^\w+@\w+\.(com|cn)$/;break;
		case "password": var reg=/\w{8,16}/;break;
		case "phone": var reg=/^1+\d{10}/;break;
	}
	if(reg){
		if(reg.test(str)){
			return true; 
		} else{
			return false;
		}
	}
	return false;
}
$("#mysubmit").click(function(){
	if((arr.toString()=="1,1,1")){
		//location.href="coolpad.html";
	}	
});
$("#randoms").click(function(){
	$("#randoms").val(checkNum());
});


//随机生成四位数验证码
	function checkNum(){
		var arr=[0,1,2,3,4,5,6,7,8,9];
		var result=new Array();
		var index;
		var wantStr="";
		for(var i=0;i<4;i++){
			index=parseInt(Math.random()*10);
			wantStr+=arr[index];
		}
		 return wantStr; 
	}

	});





//表单验证
