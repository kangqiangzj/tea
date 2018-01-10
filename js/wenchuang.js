$(function(){
	loadScroll();
	loadswiper();
	getData()
	var currentY;
	document.addEventListener("touchstart",function(){
		currentY = scroll.y;
	})
	document.addEventListener("touchend",function(){
		//下拉刷新
		if(scroll.y>0){
			$(".news").empty();
			getData();
		}
		
		//上拉加载
		if(scroll.y<scroll.maxScrollY-50){
			getData();
		}
		//footer显示隐藏
		if(currentY > scroll.y){
			$(".C_footer").css("display","none");
		}else{
			$(".C_footer").css("display","block");
		}
	});
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

function getData(){
	$.ajax({
		type:"get",
		dataType:"json",
		url:"../mock/wenchuang.json",
		async:true,
		success:function(data){
			var datas = data.data;
//			console.log(datas)
			var html = template("products",{datas:datas});
			$(".products").append(html);
			scroll.refresh();
		}
	});
}

