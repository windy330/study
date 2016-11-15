<?php
$msg = $_POST;
// print_r($msg);//test:true
//如果有请求就发送json数据
//php通过json_encode编码json_decode解码json数据
$result = file_get_contents('./json.json');
echo $result;
?>