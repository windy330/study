<?php

//自定义数据
$arr = array('张三'=>123,'小明'=>321);
// print_r($arr);
// 接参数
$username = $_POST['username'];
$password = $_POST['password'];
// var_dump($username['username']);
//检测有没有该用户名
$hasName = array_key_exists($username,$arr);
// var_dump($hasName);
//验证密码
//php语法没有全等于
if ($hasName&&$arr[$username]==$password) {
	echo '登陆成功';
	
}else{
	echo "没有登录成功,正在跳回页面";
	// 跳转到某个成功页面
		// header('refresh: 3; url=http://www.baidu.com');
	header('refresh: 3; url=./form.html');
}	












?>