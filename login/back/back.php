<?php
header('Content-Type: application/json; charset=utf-8');
$result = array(
	'code'=> 10000,
	'msg'=>'OK',
	'result'=> 'http://www.study.com/login/home.html'
	);
echo json_encode($result);
sleep(6);
?>