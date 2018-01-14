$(".C_footer").on("touchstart","li",function(){
	var index =$(this).index();
	if(index == 0){
		window.location.href = "index.html";
//		$(this).find("i").css({
//			"background":"url('../img/icons/tab_button_homepage_normal.png') no-repeat center center"
//		})
	}else if(index == 1){
		window.location.href = "wenchuang.html";
	}else if(index == 2){
		window.location.href = "shequ.html";
	}else if(index == 3){
		window.location.href = "fujin.html"
	}else if(index == 4){
		window.location.href = "my.html";
	}
})

$(".back").on("touchend",function(){
	window.history.back()
})