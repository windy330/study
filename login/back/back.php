<?php
header('Content-Type: application/json; charset=utf-8');
//$date = $_POST();
//print_r($date);
	$result = array(
	'code'=> 10000,
	'msg'=>'OK',
	'result'=> 'http://www.study.com/login/home.html'
	);
json_encode($result);
sleep(6);
}

?>