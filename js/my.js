$(function(){
//	读取本地存储的用户
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
			}else{
				alert("密码错了啊")
			}
		}
	});
}
//register
function register(){
	var username = $('#register_username').val(),
		username_len = username.length,
		user_first = $("#register_username").val().substr(0,1)
		password = $("#register_password").val(),
		repassword = $("#repassword").val();
	//注册用户信息
	var user_reg = /^[a-z]\w{3,}$/i,
		usercheck = false,
		pwdcheck = false,
		conpwdcheck = false;
		if(!user_reg.test(username)){
//			$(".username").css("color","red");
			if(!((user_first>="a"&&user_first<="w")||(user_first>="A"&&user_first<="W"))){
				alert("提示：用户名请用 英文字母开头");
			}else if(username_len<4){
				alert("提示：用户名至少四个字符")
			}
		}else{
			usercheck = true;
		}
		//确认密码两次是否驶入一致
		if(password == ""&&usercheck){
			alert("大兄弟密码都没输入")
		}else if(password == repassword){
			conpwdcheck = true;
		}else if(password != repassword){
			alert("两次输入密码不一致！");
		}
		//提交信息
		if(usercheck&&conpwdcheck){
			$.ajax({
				type:"post",
				url:"http://stuapi.ysd3g.com/api/CreateUser",
				async:true,
				data:{loginName:username,pwd:password,token:'aa4ccde8-3b85-476d-b68b-7f78f72e74d1'},
				success:function(data){
					var data = JSON.parse(data)
					if(data.success){
						$(".login_yemian").css({
		//					"left":0
							"display":"block"
							});
						$(".register_yemian").css({
		//						"left":"100%"
							"display":"none"
							});
						alert("注册成功")
						$(".lr").remove();
					}else{
						alert("注册失败，大兄弟")
					}
					
				}
			});
		}else{
//			alert("注册失败，信息有误")
		}
	
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
		"display":"block"
//		"left":0
	})
})
$(".register").on("touchend",function(){
	$(".register_yemian").css({
		"display":"block"
//		"left":0
	})
})
$(".login_yemian #back").on("touchend",function(){
	$(".login_yemian").css({
		"display":"none"
//		"left":"100%"
	})
})
$(".register_yemian #back").on("touchend",function(){
	$(".register_yemian").css({
//		"left":"100%"
		"display":"none"
	})
})
