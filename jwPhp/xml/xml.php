<?php
	//设置格式以防乱码
	header('Content-Type: text/xml; charset=utf-8');
	// 理论这一步应该是从数据库取出的，然后后端人员将数据转成xml格式
	$result = file_get_contents('./xml.xml');
	echo $result;
?>