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
	//to_detail
	
	//
	$(".index-header").on("touchend","li",function(){
//		console.log()
		var li = $(this).index();
		if(li == 0){
			window.location.href = "wenchuang.html"
		}else if(li == 1){
			window.location.href = "activity.html"
		}else if(li == 2){
			window.location.href = "shipin.html"
		}else if(li == 3){
			window.location.href = "ketang.html"
		}else if(li == 4){
			window.location.href = "chahua.html"
		}
	})
	
	$(".type .left").on("tap",function(){
		window.location.href = "wenchuang.html"
	})
	$(".type .top").on("tap",function(){
		window.location.href = "shipin.html"
	})
	$(".type .bottom").on("tap",function(){
		window.location.href = "ketang.html"
	})
	$(".type .activity").on("tap",function(){
		window.location.href = "activity.html"
	})
	$(".type .chahua").on("tap",function(){
		window.location.href = "chahua.html"
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
		mouseWheel:true,
		tap:true
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
			$(".news").on("tap","section",function(){
				var goodID = $(this).find(".goodid").val();
				console.log(goodID)
				window.location.href ="detail.html?goodID="+goodID;
			})
		}
	});
}
