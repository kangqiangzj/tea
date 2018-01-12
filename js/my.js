$(function(){
	var user = localStorage.getItem("username");
	if(user){
		$(".id").text(user);
		$(".id").css("color","orange");
		$(".leval").text("Lv.3")
		$(".lr").remove();	
		$(".sex").css({
			"background":"url(../img/icons/ic_home_male.png) no-repeat center center",
			'background-size': "80%"
		})
	}
	
})

$("#register").on("touchend",function(){
	register()
})
$("#login").on("touchend",function(){
	_login()
})
//login
function _login(){
	var username = $("#login_username").val(),
		password = $("#login_password").val();
	$.ajax({
		type:"post",
		url:"http://stuapi.ysd3g.com/api/login",
		async:true,
		data:{un:username,pwd:password,token:"aa4ccde8-3b85-476d-b68b-7f78f72e74d1"},
		success:function(data){
			var data = JSON.parse(data)
			console.log(data.success);
			if(data.success){
				alert("登录成功")
				localStorage.setItem("username",username)
				$(".login_yemian").css({
					"left":"100%"
				});
				$(".lr").remove();
				window.location.reload();
			}
		}
	});
}
//register
function register(){
	var username = $('#register_username').val(),
		password = $("#register_password").val();
	$.ajax({
		type:"post",
		url:"http://stuapi.ysd3g.com/api/CreateUser",
		async:true,
		data:{loginName:username,pwd:password,token:'aa4ccde8-3b85-476d-b68b-7f78f72e74d1'},
		success:function(data){
			var data = JSON.parse(data)
			if(data.success){
				$(".login_yemian").css({
					"left":0
					});
				$(".register_yemian").css({
						"left":"100%"
					});
				alert("注册成功")
	//			window.location.reload();
				$(".lr").remove();
			}else{
				alert("注册失败")
			}
			
		}
	});
}
//退出登录
$(".opt").on("touchend",function(){
	var user = localStorage.getItem("username");
	if(user){
		localStorage.removeItem("username");
		alert("确认退出");
		window.location.reload();
	}else{
		window.location.href = "index.html"
	}	
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
