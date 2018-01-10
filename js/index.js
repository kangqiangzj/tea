var iscroll;
$(function(){
	loadSwiper();
	loadScroll()
	getData()
	var currentY;
	document.addEventListener("touchstart",function(){
		currentY = iscroll.y;
	})
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
		//header显示隐藏
		if(iscroll.y < -300){
			$(".index-header").css("display","block");
		}else{
			$(".index-header").css("display","none");
		}
		//footer显示隐藏
		if(currentY > iscroll.y){
			$(".C_footer").css("display","none");
		}else{
			$(".C_footer").css("display","block");
		}
	});
	
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
