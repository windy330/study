<?php
	require_once('config.php');
	$con = mysql_connect(HOST,USERNAME,PASSWORD);

	if ($con == false) {
		echo mysql_error();
	}
	else {
		// echo "连接成功++";
		// echo "</br>";
		//择库
		if(!mysql_select_db("test")){
			echo mysql_error();
			// echo "</br>";
		}
		// //字符集 
		// if(!mysql_query("set username utf-8")){
		// 	echo mysql_error();
		// 	echo "</br>";
		// }
	}	
?>