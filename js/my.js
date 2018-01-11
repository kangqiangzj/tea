$(function(){
	
})

$(".login").on("touchend",function(){
	$(".login_yemian").css({
		"left":0
	})
})
$("#back").on("touchend",function(){
	console.log("1111")
	$(".login_yemian").css({
		"left":"100%"
	})
})
