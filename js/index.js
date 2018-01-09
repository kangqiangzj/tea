$(function(){
	loadSwiper();
	loadScroll()
})

//加载轮播
function loadSwiper(){
	var swiper = new Swiper(".swiper-container",{
		autoplay:1000,
		loop:true,
		pagination:".swiper-pagination"
	})
}
//滚动
function loadScroll(){
	iscroll = new IScroll("#wrapper",{
		mouseWheel:true
//		scrollbars:true
	})
}
