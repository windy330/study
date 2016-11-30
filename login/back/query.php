<?php

header("Content-type:text/html;charset=utf-8");
//连库(设定字符集)
$con = mysql_connect("localhost:3309","root","root");
if ($con == false) {
	echo "连接失败++";
	echo "</br>";
}
else {
	echo "连接成功++";
	echo "</br>";
	//择库
	mysql_select_db("test");
	//增删改
	//update test set password="1234" where id =3//
	mysql_query('update test set password="1234" where id =2');//@t:true
	//insert into test(username,password) value("小明","123");
	mysql_query('insert into test(username,password) value("小龙哥","123")');//@t:true
	//$query是结果集的地址(连接标志符)
	$query = mysql_query("select*from test");
	// print_r($query);
	// 拿数据
	// $arr = mysql_fetch_array($query);
	// echo $arr["username"];//@t习近平
	// echo "++";
	// $obj = mysql_fetch_object($query);
	// 结果集行数
	$row = mysql_num_rows($query);
	echo $row;
	echo "</br>";
	//遍历结果集
	// while ($obj = mysql_fetch_object($query)) {
	// 	echo $obj->username;
	// }
	// echo "</br>";
	// 转json 
	while ($row != 0 && $obj = mysql_fetch_object($query)) {
		$json  =  json_encode ($obj);
		echo $json;
	}
	echo "</br>";
	
}	

?>