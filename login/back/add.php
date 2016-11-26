<?php
	require_once('connect.php');
	//把传递过来的信息入库
	// print_r($_POST);//@t:true
	// print_r($_POST["username"]);//@t:true
	// print_r($_POST["pwd"]);//@t:true
	// 获取变量
	$username = $_POST["username"];
	$password =	$_POST["pwd"];
	// $time = time();
	//校验 
	if (!(isset($username)&&(!empty($username)))) {
		echo "false";
	}
	//择库
	mysql_select_db("test");
	//添加数据
	$str = "insert into test(username,password) value('".$username."','".$password."')";
	mysql_query($str);//@t:true
	
	$result = array(
	'code'=> 10000,
	'msg'=>'OK',
	'result'=> 'http://www.study.com/login/login.html'
	);
    echo json_encode($result);
    sleep(3);
?>
