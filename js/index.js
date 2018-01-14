var iscroll,records = [],_record;
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

	//search
	$(".search").on("touchend",function(){
		$(".search_main").css({
			"display":"block",
			"z-index":999
		});
	})
	//search_main
	$(".top .cancel").on("touchend",function(){
		$(".search_main").css({
			"display":"none",
			"z-index":-999
		});
		$(".pic").css({
			"display":"block"
		})
		$(".record").css("display","none !important")
		window.location.reload();
	})
	//输入框点击
	$(".search_input").on("touchend",function(){
		$(".pic").css({
			"display":"none"
		})
		$(".record").css("display","block !important")
		_record = localStorage.getItem("record")
	})
//	失去焦点时将搜索信息存入记录
	$(".search_input").on("blur",function(){
		var ipt = $(".search_input").val();
		srecords = localStorage.getItem("record");
		var records = srecords.split(",")
		console.log(records)
		if(ipt!=""){
			records.push(ipt)			
		}
		localStorage.setItem("record",String(records))
//		console.log(_record);
	})
	//点击清除记录时清除存储
	$(".clear").on("touchend",function(){
		localStorage.clear("record");
		localStorage.setItem("record",String(["搜索历史：","普洱茶"]));
		$(".pic").css({
			"display":"block"
		})
		$(".record").css("display","none !important")
		window.location.reload();
	})
	//输入搜索信息存入记录
	var re =$(".record ul");
	_record = localStorage.getItem("record").split(",");
	$.each(_record,function(index){
		re.append($("<li>"+_record[index]+"</li>"));
	})
	
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
	
	$("#search").on("touchend",function(){
		console.log("111")
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
			//to_detail
			$(".news").on("tap","section",function(){
				var goodID = $(this).find(".goodid").val();
				console.log(goodID)
				window.location.href ="detail.html?goodID="+goodID;
			})
		}
	});
}
