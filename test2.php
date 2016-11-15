<?php
// echo $_POST[];
// $file = $_FILES['file']['tmp_name'];
// print_r ($_FILES);
$fileOne = $_FILES['file'];//获取浏览器传过来的input的name为file的对象
print_r ($fileOne);
//打印的内容:Array ( [name] => 5.jpg [type] => image/jpeg [tmp_name] => D:\wamp\tmp\php50B0.tmp [error] => 0 [size] => 47094 ) D:\wamp\tmp\php50B0.tmp
$fileTwo = $fileOne['tmp_name'];//获取临时文件夹里面的key为tmp_name的包含图片路径的字符串
echo $fileTwo;
//将该路径($fileTwo)下面的文件移动到'./upload.jpg'
move_uploaded_file($fileTwo, './upload.jpg');
//打印
echo '<img src="./upload.jpg">';

?>