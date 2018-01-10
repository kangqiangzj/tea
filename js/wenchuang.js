$(function(){
	loadScroll();
	loadswiper();
})

//scroll
var scroll;
function loadScroll(){
	scroll = new IScroll("#wrapper",{
		mouseWheel:true
	})
}
//swiper
function loadswiper(){
	var swiper = new Swiper("#lunbo1",{
		autoplay:1000,
		loop:true,
		pagination:".swiper-pagination"
	})
	
	var swiper2 = new Swiper("#lunbo2",{
		slidesPerView:3
	})
}


