var iscroll;
$(function(){
	loadSwiper();
	loadScroll()
	getData()
	document.addEventListener("touchend",function(){
		//下拉刷新
		if(iscroll.y>0){
			$(".news").empty();
			getData();
		}
		
		//上拉加载
		if(iscroll.y<iscroll.maxScrollY-50){
			getData();
		}
	})
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

function getData(){
	$.ajax({
		type:"get",
		dataType:"json",
		url:"../mock/teaData.json",
		async:true,
		success:function(data){
			console.log(data.data);
			var html = template("news",{datas:data.data})
			var n = $(".content .news");
			n.append(html);
			iscroll.refresh();//
		}
	});
}
