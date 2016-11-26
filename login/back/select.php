<?php
	require_once('connect.php');
	$username = $_POST["username"];
	$password =	$_POST["pwd"];
	//校验 
	if (!(isset($username)&&(!empty($username)))) {
		$result = array(
		'code'=> 10001,
		'msg'=>'FALSE',
		'result'=> 'http://www.study.com/login/login.html'
		);
	    echo json_encode($result);
	    sleep(3);
	}
	//择库
	mysql_select_db("test");
	//查询数据
	// //select PASSWORD FROM test WHERE username="小明"
	// $str = "select * FROM test WHERE username='".$username."'";
	$query = mysql_query("select*from test");
	// echo $str;
	// $result = mysql_query($query);//@t:true
	$arr = array();
	$i = 0;
	//遍历结果集
	while ($obj = mysql_fetch_array($query,MYSQL_BOTH)) {
		// echo $obj['username'];
		$arr[$obj['username']] = $obj['password'];
		$i++;
	}
	// print_r($arr) ;
	//检测有没有该用户名
	$hasName = array_key_exists($username,$arr);
	// var_dump($hasName);
	//验证密码
	//php语法没有全等于
	if ($hasName&&$arr[$username]==$password) {
		// echo '登陆成功,正在跳转';
		$result = array(
		'code'=> 10000,
		'msg'=>'OK',
		'result'=> 'http://www.study.com/login/home.html'
		);
	    echo json_encode($result);
	    sleep(3);
	}else{
		// echo "没有登录成功,正在跳回页面";
		$result = array(
		'code'=> 10001,
		'msg'=>'FALSE',
		'result'=> 'http://www.study.com/login/login.html'
		);
	    echo json_encode($result);
	    sleep(3);
	}	
?>