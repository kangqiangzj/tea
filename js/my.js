$(function(){
	
})

$(".login").on("touchend",function(){
	$(".login_yemian").css({
		"left":0
	})
})
$(".register").on("touchend",function(){
	$(".register_yemian").css({
		"left":0
	})
})
$(".login_yemian #back").on("touchend",function(){
	$(".login_yemian").css({
		"left":"100%"
	})
})
$(".register_yemian #back").on("touchend",function(){
	$(".register_yemian").css({
		"left":"100%"
	})
})
