<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
	// php变量的声明
	// 字符串
	$str = '你好世界';
	echo $str;
	// 变量的命名
	// 字母数字下划线,数字不打头
	$str1 = 'str1';
	$_str1 = '_str1';
	// 指定编码集
	header('Content-Type:text/html;charset=utf-8');
	//数据类型
	//字符串 数值 布尔值 数组 对象 null
	$str2 = '字符串';
	$str2 = "字符串";//单引号和双引号都可以
	echo $str2;
	//数字
	$num = 10;
	$float = 10.5;
	echo $num;
	echo $float;
	//布尔值
	$boolean = false;
	$boolean2 = true;
	echo $boolean;//页面不打印任何东西
	echo $boolean2;//返回1
	//数组
	$arr = array(1,2,3);
	$arr2 = array($arr,2,3);//二维素组
	$arr3 = array('name' => '张三' , 'age' => 24);////关联数组
	print_r($arr);
	print_r($arr2);
	print_r($arr3);//print_r打印数组结构
	//对象
	//对比js:var obj = {name:'zhangsan',age:10}
	//obj.name 
	//obj['name']
	$arr4 = array('name' => 'zhangsan', 'age'=>11);
	echo $arr4['name'];
	echo $arr4['age'];
	//null
	$a=null;
	echo 'a='.$a;//页面不打印任何东西
	//================================
	//声明一个类
	class Person {
		public $name = "lisi";
		public $age = 10;
	}
	//实例化
	$person = new Person;
	var_dump($person);
	//================================
	// echo 输出简单类型
	// print_r(); 用来输出数组结构
	// var_dump(); 用来输变量详细信息
	//================================
	// php里面字符串的拼接不能用"+"号,"+"号只能做算术运算,php用"."做字符串的拼接
	$num1 = 10;
	$num2 = 5;
	echo $num1+$num2;
	echo $num1.$num2;
	//================================
	// 函数,可以指定参数的默认值
	function sayHi($name="zhangsan"){
		echo "你好".$name;
	}
	sayHi();
	//================================
	//分支语句
	$num = 16;
	if($num <= 16){
		echo '年级太小';
	}
	//循环语句
	$arr5 = array(1,2);
	//获取数组长度
	$len = count($arr5);
	//循环语句
	for ($i=0; $i < $len; $i++) { 
		echo($arr5[$i]);
	}
	//循环语句
	$arr6 = array('你','好');
	//循环语句
	foreach ($arr6 as $key => $value) {
		echo $arr6[$key];
	}
	//也可以循环索引素组
	foreach ($arr5 as $key => $value) {
		echo $arr5[$key];
	}
	//=================================
	//动态加载页面
	echo '<h1>hello wolrd</h1>';
	echo '<a href="http://www.baidu.com">去百度</a>';
	//动态加载列表
	?>
	<ul>
		<?php
			foreach($arr as $key=>$val) {
		?>
		
			<li><?php echo $val; ?></li>

		<?php
			}
		?>
	</ul>
</body>
</html>
