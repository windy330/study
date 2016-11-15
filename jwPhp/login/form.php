<?php
//=============================表单===============================
// //自定义数据
// $arr = array('张三'=>123,'小明'=>321);
// // print_r($arr);
// // 接参数
// $username = $_POST['username'];
// $password = $_POST['password'];
// // var_dump($username['username']);
// //检测有没有该用户名
// $hasName = array_key_exists($username,$arr);
// // var_dump($hasName);
// //验证密码
// //php语法没有全等于
// if ($hasName&&$arr[$username]==$password) {
// 	echo '登陆成功,正在跳转';
// 	// header('refresh:3;url=./home.php');

// }else{
// 	echo "没有登录成功,正在跳回页面";
// 	// 跳转到某个成功页面
// 		// header('refresh: 3; url=http://www.baidu.com');
// 	header('refresh: 3; url=./form.html');
// }	
// //接收文件
// var_dump($_FILES);
// //获取文件名
// $fileName = $_FILES['file']['name'];
// // echo $fileName;
// // 获取文件路径
// $path = $_FILES['file']['tmp_name'];
// //将文件从临时目录里面移出来(移除更新文件)
// //move_uploaded_file
// move_uploaded_file($path,'./'.$fileName);
// echo "<img src=".'./'.$fileName.">"
// // echo $file;
// ======================================AJAX====================================
$username = $_POST;
var_dump($username);
?>
