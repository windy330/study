<?php
	$result = file_get_contents('./ajax.json');
	switch (true) {
		case $_POST!=null&&$_GET==null:
			echo $result;
			break;
		case $_POST==null&&$_GET!=null:
			echo $result;
			break;
		case $_POST!=null&&$_GET!=null:
			echo $result;
			break;
		default:
			echo '请求行不正确';
			break;
	}
?>