$("#login").click(function(){	
	location.href = "login.html";
});

$("#register").click(function(){
	location.href = "register.html";	
});


$("#imgone").mouseover(function(){
	$("#imgthree").css({"opacity":"1"});
});
$("#imgone").mouseout(function(){
	$("#imgthree").css({"opacity":"0"});
});
$("#imgtwo").mouseover(function(){
	$("#imgfour").css({"opacity":"1"});
});
$("#imgtwo").mouseout(function(){
	$("#imgfour").css({"opacity":"0"});
});

$(".partLeft").mouseenter(function(){
	$("#zzcone").animate({"opacity":"0"},500);
});
$(".partLeft").mouseleave(function(){
	$("#zzcone").animate({"opacity":"0.4"},500);
});
$(".partCenter").mouseenter(function(){
	$("#zzctwo").animate({"opacity":"0"},500);
});
$(".partCenter").mouseleave(function(){
	$("#zzctwo").animate({"opacity":"0.4"},500);
});
$(".partRight").mouseenter(function(){
	$("#zzcthree").animate({"opacity":"0"},500);
});
$(".partRight").mouseleave(function(){
	$("#zzcthree").animate({"opacity":"0.4"},500);
});